import * as detect from '../node_modules/wasm-feature-detect/dist/esm/index.js';
import * as asbind from '../node_modules/as-bind/dist/as-bind.esm.js';

const wasmFile = '../dist/as.dev.wasm';

async function log(...msg) {
  const str = () => { // helper function: translates json to human readable string
    if (!Array.isArray(msg)) return msg;
    let line = '';
    for (const entry of msg) {
      if (typeof entry === 'object') line += JSON.stringify(entry).replace(/{|}|"|\[|\]/g, '').replace(/,/g, '&nbsp');
      else line += entry + '&nbsp';
    }
    return line;
  };
  const dt = new Date();
  const ts = `${dt.getHours().toString().padStart(2, '0')}:${dt.getMinutes().toString().padStart(2, '0')}:${dt.getSeconds().toString().padStart(2, '0')}.${dt.getMilliseconds().toString().padStart(3, '0')}`;
  // eslint-disable-next-line no-console
  console.log(ts, ...msg);
  const div = document.getElementById('log') || document.createElement('div');
  div.innerHTML += ts + '&nbsp &nbsp' + str() + '<br>';
}

async function main() {
  const features = {
    simd: await detect.simd(),
    bigInt: await detect.bigInt(),
    bulkMemory: await detect.bulkMemory(),
    threads: await detect.threads(),
  };
  log('WASM features:', features);
  log('WASM module:', wasmFile);

  const memory = new WebAssembly.Memory({ initial: 1, maximum: 100, shared: true });
  const imports = {
    callbacks: { // callbacks is defined as wasm module
      log(str) { // log is imported inside callbacks module
        log('wasm:', str);
      },
    },
    env: { memory },
  };
  const res = await fetch(wasmFile);
  const wasm = res && res.ok ? await asbind.instantiate(res, imports) : null;
  if (!wasm) {
    log('Fetch failed:', res.status, res.statusText, wasmFile);
    return;
  }

  log('Starting tests...');

  // import from wasm
  const { add, str, sum, callback, mem, factorial } = wasm.exports;

  log('# add:', add(1, 2)); // use numbers
  log('# sum', sum([1, 2, 3])); // use arrays
  log('# str:', str('test string')); // use strings
  log('# callback test');
  callback(); // run js function from as

  log('# mem shared memory allocated:', memory.buffer.byteLength);
  const arr = new Uint32Array(memory.buffer);
  for (let i = 0; i < arr.length; i++) arr[i] = i;
  log('# mem sum js:', arr.reduce((total, current) => total + current, 0)); // sum 16k element array using 64k of memory
  log('# mem sum wasm:', mem(0, arr.length)); // use memory passed from js
  log('# mem sum js:', arr.reduce((total, current) => total + current, 0)); // should be zeroed within wasm

  const size = 10;
  let b = 1.0;
  for (let i = size; i > 0; i--) b *= i;
  log('# factorial js:', b);
  log('# factorial wasm:', factorial(size));

  log('Done...');
}

window.onload = main;
