import * as callbacks from './as/callbacks';

export function add(a: i32, b: i32): i32 {
  return a + b;
}

export function str(value: string): string {
  return value + ' return';
}

export function sum(a: i32[]): i32 {
  let b: i32 = 0;
  for (let i = 0; i < a.length; i++) b += a[i];
  return b;
}

export function callback(): void {
  callbacks.log('callback');
}

export function mem(pos: i32, size: i32): i32 {
  let b: i32 = 0;
  for (let i = pos; i < size; i++) {
    b += atomic.load<i32>(i * 4); // need to align memory access
    atomic.store<i32>(i * 4, 0);
  }
  return b;
}

export function factorial(size: i32): i32 {
  let b: i32 = 1;
  for (let i = size; i > 0; i--) b *= i;
  return b;
}
