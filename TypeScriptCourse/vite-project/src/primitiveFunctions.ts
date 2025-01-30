import { expect } from "vitest";

export default {};

const concatFunc = function (a: string, b?: string) {
  if (!b) {
    return a;
  }

  return [a, b].join(" ");
};

const result = concatFunc("John", "Allen");
console.log(result);

console.log(concatFunc("John"));

expect(result).toEqual("John Allen");
