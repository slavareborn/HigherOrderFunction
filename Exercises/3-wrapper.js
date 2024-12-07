'use strict';

const contract = (fn, ...types) => (...args) => {
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    const def = types[i];
    const name = def.name.toLowerCase();
    if (typeof arg !== name) {
      throw new TypeError(`Argument type ${name} expected`);
    }
  }
  const result = fn(...args);
  const def = types[types.length - 1];
  const name = def.name.toLowerCase();
  if (typeof result !== name) {
    throw new TypeError(`Result type ${name} expected`);
  }
  return result;
};

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
console.log(addNumbers(2, 3))

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
console.log(concatStrings('Hello ', 'world!'))