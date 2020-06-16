import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import { isOdd } from "./mod.ts";

Deno.test("testing second input", function test(): void {
  assertEquals(isOdd(5), true);
});

Deno.test("testing third input", function test(): void {
  assertEquals(isOdd(40), false);
});

Deno.test("testing negative input", function test(): void {
  assertEquals(isOdd(-6), false);
});

Deno.test("testing large input", function test(): void {
  assertEquals(isOdd(Number.MAX_SAFE_INTEGER /*(2^53 - 1)*/), true);
});

Deno.test("testiing small input", function test(): void {
  assertEquals(isOdd(Number.MIN_SAFE_INTEGER /*(-(2^53 - 1))*/), true);
});
