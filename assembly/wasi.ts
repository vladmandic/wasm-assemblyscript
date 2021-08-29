// eslint-disable-next-line node/no-missing-import
import 'wasi';
// eslint-disable-next-line node/no-missing-import
import * as wasi from 'as-wasi'; // <https://github.com/jedisct1/as-wasi/blob/master/REFERENCE_API_DOCS.md>

export function add(a: i32, b: i32): i32 {
  return a + b;
}

export function writeFile(): void {
  const filePath = 'helloworld.txt';
  const fileDesciptor: wasi.Descriptor | null = wasi.FileSystem.open(filePath, 'w+');
  if (!fileDesciptor) throw new Error('Could not open the file ' + filePath);
  const f = changetype<wasi.Descriptor>(fileDesciptor);
  f.writeStringLn('Hello World!');
}

function start(): void {
  const env = new wasi.Environ();
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const home: string = env.get('HOME')!;
  wasi.Console.log(`wasm module init: ${home}`);
}

start();
