type MapObject = {
  [key: string]: { [key: number]: number[] };
};

const parseArray = (arr: string[]): MapObject => {
  let mapName = "";
  const result: MapObject = {};

  for (const [index, line] of arr.entries()) {
    if (line.includes("map")) {
      mapName = line.replace(" map:", "");

      result[mapName] = {};
    } else {
      const [key, ...values] = line.split(" ").map(Number);
      if (!isNaN(key)) {
        result[mapName][index] = [key, ...values];
      }
    }
  }

  return result;
};
const part1 = (input: string) => {
  const inputs = input
    .split("\n")
    .map((i) => i.trim())
    .filter((i) => i !== "");

  const mappedInputs = parseArray(inputs);

  const DESTINATION_RANGE_START_INDEX = 0;
  const SOURCE_RANGE_START_INDEX = 1;
  const RANGE_LENGTH_INDEX = 2;

  const answer = "N/A";
  return answer;
};

const part2 = (input: string) => {
  const inputs = input
    .split("\n")
    .map((i) => i.trim())
    .filter((i) => i !== "");

  const answer = "N/A";
  return answer;
};

export { part1, part2 };
