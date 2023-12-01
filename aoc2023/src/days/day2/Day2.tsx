import { part1, part2 } from "./day";
const Day = () => {
  const part1Answer = part1();
  const part2Answer = part2();
  return (
    <>
      <h2>Day 2</h2>
      <p>
        Part 1: <pre>{part1Answer}</pre>
      </p>
      <p>
        Part 2: <pre>{part2Answer}</pre>
      </p>
    </>
  );
};

export default Day;
