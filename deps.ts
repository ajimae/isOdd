import { isEven } from "https://raw.githubusercontent.com/ajimae/isEven/master/mod.ts";

export function isOdd(number: number): boolean | Error {
  return !isEven(number);
}
