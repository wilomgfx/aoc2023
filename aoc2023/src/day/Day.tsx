export interface DayProps {
  part1Answer: string | number;
  part2Answer: string | number;
  dayNumber: number;
  part1ExecutionTime: number;
  part2ExecutionTime: number;
}
const Day = ({
  part1Answer,
  part2Answer,
  dayNumber,
  part1ExecutionTime,
  part2ExecutionTime,
}: DayProps) => {
  async function copyTextToClipboard(text: string) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }
  return (
    <>
      <h2>Day {dayNumber}</h2>
      <div>
        <p>Part 1:</p>
        <pre
          onClick={() => {
            copyTextToClipboard(String(part1Answer));
          }}
        >
          {part1Answer}
        </pre>
        <p>Time: {part1ExecutionTime} ms</p>
      </div>
      <div>
        <p>Part 2:</p>
        <pre
          onClick={() => {
            copyTextToClipboard(String(part2Answer));
          }}
        >
          {part2Answer}
        </pre>
        <p>Time: {part2ExecutionTime} ms</p>
      </div>
    </>
  );
};

export default Day;
