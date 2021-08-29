const fs = require('fs');
const path = require('path');
const process = require('process');
// eslint-disable-next-line node/no-missing-require
const wasi = require('wasi');
const loader = require('@assemblyscript/loader');
const log = require('@vladmandic/pilogger');

const wasmFile = '../dist/wasi.dev.wasm';
const wasmFilePath = path.join(__dirname, wasmFile);

async function main() {
  const memory = new WebAssembly.Memory({ initial: 1, maximum: 100, shared: true });
  const wasiEnv = new wasi.WASI({
    args: process.argv,
    env: process.env,
    preopens: {
      '/home': __dirname,
    },
  });
  const imports = {
    wasi_snapshot_preview1: wasiEnv.wasiImport,
    env: { memory },
  };

  /* native loader without assemblyscript
    const wasm = await WebAssembly.compile(fs.readFileSync(wasmFile));
    const instance = await WebAssembly.instantiate(wasm, importObject);
  */

  const instance = await loader.instantiate(fs.readFileSync(wasmFilePath), imports);

  wasiEnv.start(instance); // for wasi must start instance in nodejs, this also triggers entry function defined as _start

  // @ts-ignore // exports cannot be enumerated from wasm module
  const sum = instance.exports.add(1, 2);
  log.data('add', sum);
}

main();
