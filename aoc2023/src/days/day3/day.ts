const ALL_DIRECTIONS = [
  [-1, -1],
  [0, -1],
  [1, -1],
  [-1, 0],
  [1, 0],
  [-1, 1],
  [0, 1],
  [1, 1],
];
const isAdjacentTo = (
  array: string[],
  row: number,
  col: number,
  regex: RegExp
): boolean =>
  ALL_DIRECTIONS.map(([i, j]) => array[row + i]?.[col + j])
    .filter((x) => x !== undefined)
    .some((char) => regex.test(char));

const part1 = (input: string) => {
  const inputs = input
    .split("\n")
    .map((i) => i.trim())
    .filter((i) => i !== "");

  let sum = 0;
  for (const [row, value] of inputs.entries()) {
    const matches = [...value.matchAll(/\d+/g)].filter((x) =>
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      [...x[0]].some((_, i) => isAdjacentTo(inputs, row, x.index + i, /[^\d.]/))
    );
    for (const match of matches) {
      sum += parseInt(match[0]);
    }
  }

  const answer = sum;
  return answer;
};

const part2 = (input: string) => {
  const inputs = input
    .split("\n")
    .map((i) => i.trim())
    .filter((i) => i !== "");

  const adjacentNumbersLookup: Record<string, { number: number; id: string }> =
    {};
  for (const [row, value] of inputs.entries()) {
    const matches = [...value.matchAll(/\d+/g)].filter((m) =>
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      [...m[0]].some((_, i) => isAdjacentTo(inputs, row, m.index + i, /[^\d.]/))
    );
    for (const match of matches) {
      for (let i = 0; i < match[0].length; i++) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        const key = `${row};${match.index + i}`;
        adjacentNumbersLookup[key] = {
          number: parseInt(match[0]),
          id: `${row};${match.index}`,
        };
      }
    }
  }

  let sum = 0;
  for (const [row, value] of inputs.entries()) {
    const matches = [...value.matchAll(/\*/g)].filter((m) =>
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      isAdjacentTo(inputs, row, m.index, /\d/)
    );
    for (const match of matches) {
      const adjacentGearNumbers = ALL_DIRECTIONS.map(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        ([i, j]) => adjacentNumbersLookup[`${row + i};${match.index + j}`]
      ).filter((x) => x !== undefined);
      const gearNumbers = [
        ...new Set(adjacentGearNumbers.map((x) => x.id)),
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
      ].map((id) => adjacentGearNumbers.find((x) => x.id === id).number);

      if (gearNumbers.length === 2)
        sum += gearNumbers.reduce((acc, x) => acc * x, 1);
    }
  }

  const answer = sum;
  return answer;
};

export { part1, part2 };
