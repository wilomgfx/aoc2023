import { expect, it, describe } from "vitest";
import { part1, part2 } from "./day";
import input from "./input";
describe("Day9", () => {
  describe("Part1", () => {
    it("should return the correct answer for the example provided", () => {
      const input = `
      0 3 6 9 12 15
      1 3 6 10 15 21
      10 13 16 21 30 45
      `;
      const expected = 114;
      expect(part1(input)).toBe(expected);
    });
    it("should return the correct answer for part 1", () => {
      expect(part1(input)).toBe(1789635132);
    });
  });

  describe("Part2", () => {
    it("should return the correct answer for the example provided", () => {
      const input = `
      0 3 6 9 12 15
      1 3 6 10 15 21
      10 13 16 21 30 45
      `;
      const expected = 2;
      expect(part2(input)).toBe(expected);
    });
    it("should return the correct answer for part 2", () => {
      expect(part2(input)).toBe(913);
    });
  });
});
