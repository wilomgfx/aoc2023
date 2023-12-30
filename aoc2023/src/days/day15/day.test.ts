import { expect, it, describe } from "vitest";
import { part1, part2 } from "./day";
import input from "./input";
describe("Day15", () => {
  describe("Part1", () => {
    it("should return the correct answer for the example provided", () => {
      const input = `rn=1,cm-,qp=3,cm=2,qp-,pc=4,ot=9,ab=5,pc-,pc=6,ot=7`;
      const expected = 1320;
      expect(part1(input)).toBe(expected);
    });
    it("should return the correct answer for part 1", () => {
      expect(part1(input)).toBe(509784);
    });
  });

  describe("Part2", () => {
    it("should return the correct answer for the example provided", () => {
      const input = `rn=1,cm-,qp=3,cm=2,qp-,pc=4,ot=9,ab=5,pc-,pc=6,ot=7`;
      const expected = 281;
      expect(part2(input)).toBe(expected);
    });
    it("should return the correct answer for part 2", () => {
      expect(part2(input)).toBe(54249);
    });
  });
});
