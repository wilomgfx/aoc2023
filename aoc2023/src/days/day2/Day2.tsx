import Day from "../../day/Day";
import input from "./input";
import { part1, part2 } from "./day";
const DAY_NUMBER = 2;
const Day2 = () => {
  //part1
  const part1Start = performance.now();
  const part1Answer = part1(input);
  const part1End = performance.now();
  const part1ExecutionTime = part1End - part1Start;
  //part2
  const part2Start = performance.now();
  const part2Answer = part2(input);
  const part2End = performance.now();
  const part2ExecutionTime = part2End - part2Start;
  return (
    <Day
      dayNumber={DAY_NUMBER}
      part1Answer={part1Answer}
      part2Answer={part2Answer}
      part1ExecutionTime={part1ExecutionTime}
      part2ExecutionTime={part2ExecutionTime}
    />
  );
};

export default Day2;
