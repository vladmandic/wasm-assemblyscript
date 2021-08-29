const fs = require('fs');
const path = require('path');
const log = require('@vladmandic/pilogger');
const detect = require('wasm-feature-detect'); // helper that detects current wasm features
const asbind = require('as-bind/dist/as-bind.cjs.js'); // helper for as-loader that wraps string&array types

const wasmFile = '../dist/as.dev.wasm';
const wasmFilePath = path.join(__dirname, wasmFile);

async function main() {
  log.header();
  const features = {
    simd: await detect.simd(),
    bigInt: await detect.bigInt(),
    bulkMemory: await detect.bulkMemory(),
    threads: await detect.threads(),
  };
  log.info('WASM features:', features);
  log.info('WASM module:', wasmFilePath);

  const memory = new WebAssembly.Memory({ initial: 1, maximum: 100, shared: true });
  const imports = {
    callbacks: { // callbacks is defined as wasm module
      log(str) { // log is imported inside callbacks module
        log.data('js:', str);
      },
    },
    env: { memory },
  };
  const wasm = await asbind.instantiate(fs.readFileSync(wasmFilePath), imports);

  log.info('Startin tests...');

  // import from wasm
  const { add, str, sum, callback, mem, factorial } = wasm.exports;

  log.data('add:', add(1, 2)); // use numbers
  log.data('sum', sum([1, 2, 3])); // use arrays
  log.data('str:', str('test string')); // use strings
  callback(); // run js function from as

  log.data('mem allocated:', memory.buffer.byteLength);
  const arr = new Uint32Array(memory.buffer);
  for (let i = 0; i < arr.length; i++) arr[i] = i;
  log.data('mem sum js:', arr.reduce((total, current) => total + current, 0)); // sum 16k element array using 64k of memory
  log.data('mem sum wasm:', mem(0, arr.length)); // use memory passed from js
  log.data('mem sum js:', arr.reduce((total, current) => total + current, 0)); // should be zeroed within wasm

  const size = 10;
  let b = 1.0;
  for (let i = size; i > 0; i--) b *= i;
  log.data('factorial js:', b);
  log.data('factorial wasm:', factorial(size));

  log.info('Done...');
}

main();
