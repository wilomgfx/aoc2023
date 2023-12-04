import Day from "../../day/Day";
import input from "./input";
import { part1, part2 } from "./day";
const Day3 = () => {
  const part1Answer = part1(input);
  const part2Answer = part2(input);
  return (
    <Day dayNumber={4} part1Answer={part1Answer} part2Answer={part2Answer} />
  );
};

export default Day3;
