import { expect, it, describe } from "vitest";
import { part1, part2 } from "./day";
import input from "./input";
describe("Day7", () => {
  describe("Part1", () => {
    it("should return the correct answer for the example provided", () => {
      const input = `
      32T3K 765
      T55J5 684
      KK677 28
      KTJJT 220
      QQQJA 483
      `;
      const expected = 142;
      expect(part1(input)).toBe(expected);
    });
    it("should return the correct answer for part 1", () => {
      expect(part1(input)).toBe(53194);
    });
  });

  describe("Part2", () => {
    it("should return the correct answer for the example provided", () => {
      const input = `
      32T3K 765
      T55J5 684
      KK677 28
      KTJJT 220
      QQQJA 483
      `;
      const expected = 281;
      expect(part2(input)).toBe(expected);
    });
    it("should return the correct answer for part 2", () => {
      expect(part2(input)).toBe(54249);
    });
  });
});
