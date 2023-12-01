import { expect, it, describe } from "vitest";
import { part1, part2 } from "./day";
describe("Day1", () => {
  it("should return the correct answer for part 1", () => {
    const expected = "day1 part1";
    expect(part1()).toBe(expected);
  });
  it("should return the correct answer for part 2", () => {
    const expected = "day1 part2";
    expect(part2()).toBe(expected);
  });
});
