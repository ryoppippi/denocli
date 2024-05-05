import * as U from "jsr:@core/unknownutil@3.18.0";
export function add(a: number, b: number): number {
  return a + b;
}

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  const a = Deno.args.at(0);
  const b = Deno.args.at(1);

  U.assert(a, U.isString);
  U.assert(b, U.isString);

  const an = parseInt(a);
  const bn = parseInt(b);

  U.assert(an, U.isNumber);
  U.assert(bn, U.isNumber);

  console.log(`The sum of ${an} and ${bn} is ${add(an, bn)}`);
}
