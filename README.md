# WASM Test

## Tests

- `src/test-as.js`: NodeJS generic test, uses `assembly/as.ts` compiled to `assembly/as.wasm`
- `src/test-wasi.js`: NodeJS WASI interface test, uses `assembly/wasi.ts` compiled to `assembly/wasi.wasm`
- `src/test-browser.js`: Browser generic test, uses `assembly/as.ts` compiled to `assembly/as.wasm`

## Notes

Use `npm build` to build WASM binaries from sources in `/assembly`
Use `npm dev` to start HTTP/HTTPS dev server for browser tests

## Work so far

- Unified build pipeline
- SIMD detection and support
- WASI interface
- Strings
- Arrays
- Callbacks
- Shared memory
- Browser & NodeJS unified WASM

## References

- <https://www.assemblyscript.org/introduction.html>
- <https://github.com/GoogleChromeLabs/wasm-feature-detect>
- <https://www.npmjs.com/package/as-bind>
- <https://www.npmjs.com/package/as-wasi>

## Interesting

- <https://www.npmjs.com/package/as-wake>
- <https://www.npmjs.com/package/as-bignum>
- <https://www.npmjs.com/package/as-websocket>
- <https://github.com/as2d/as2d>
