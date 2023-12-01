export interface DayProps {
  part1Answer: string | number;
  part2Answer: string | number;
  dayNumber: number;
}
const Day = ({ part1Answer, part2Answer, dayNumber }: DayProps) => {
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
      </div>
    </>
  );
};

export default Day;
