export interface DayProps {
  part1Answer: string;
  part2Answer: string;
}
const Day = ({ part1Answer, part2Answer }: DayProps) => {
  async function copyTextToClipboard(text: string) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }
  return (
    <>
      <h2>Day 1</h2>
      <div>
        <p>Part 1:</p>
        <pre
          onClick={() => {
            copyTextToClipboard(part1Answer);
          }}
        >
          {part1Answer}
        </pre>
      </div>
      <div>
        <p>Part 2:</p>
        <pre
          onClick={() => {
            copyTextToClipboard(part2Answer);
          }}
        >
          {part2Answer}
        </pre>
      </div>
    </>
  );
};

export default Day;
