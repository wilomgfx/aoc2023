import Day from "../../day/Day";
import input from "./input";
import { part1, part2 } from "./day";
const Day{n} = () => {
  const part1Answer = part1(input);
  const part2Answer = part2(input);
  return (
    <Day dayNumber={n} part1Answer={part1Answer} part2Answer={part2Answer} />
  );
};

export default Day{n};
