import Day from "../../day/Day";
import { part1, part2 } from "./day";
const Day1 = () => {
  const part1Answer = part1();
  const part2Answer = part2();
  return <Day part1Answer={part1Answer} part2Answer={part2Answer} />;
};

export default Day1;
