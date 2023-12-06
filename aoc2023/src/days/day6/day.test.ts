import { expect, it, describe } from "vitest";
import { part1, part2 } from "./day";
import input from "./input";
describe("Day6", () => {
  describe("Part1", () => {
    it("should return the correct answer for the example provided", () => {
      const input = `
      Time:      7  15   30
      Distance:  9  40  200
      `;
      const expected = 288;
      expect(part1(input)).toBe(expected);
    });
    it("should return the correct answer for part 1", () => {
      expect(part1(input)).toBe(227850);
    });
  });

  describe("Part2", () => {
    it("should return the correct answer for the example provided", () => {
      const input = `
      Time:      7  15   30
      Distance:  9  40  200
      `;
      const expected = 71503;
      expect(part2(input)).toBe(expected);
    });
    it("should return the correct answer for part 2", () => {
      expect(part2(input)).toBe(54249);
    });
  });
});
