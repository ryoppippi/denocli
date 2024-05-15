import * as U from "jsr:@core/unknownutil@3.18.0";

/**
 * Subtracts two numbers
 * @param a The first number
 * @param b The second number
 * @returns The sum of the two numbers
 */
export function sub(a: number, b: number): number {
  return a - b;
}

if (import.meta.main) {
  const a = Deno.args.at(0);
  const b = Deno.args.at(1);

  U.assert(a, U.isString);
  U.assert(b, U.isString);

  const an = parseInt(a);
  const bn = parseInt(b);

  U.assert(an, U.isNumber);
  U.assert(bn, U.isNumber);

  const ans = sub(an, bn);
  console.log(ans);
}
