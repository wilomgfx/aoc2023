// type MapObject = {
//   [key: string]: { [key: number]: number[] };
// };

// const parseArray = (arr: string[]): MapObject => {
//   let mapName = "";
//   const result: MapObject = {};

//   for (const [index, line] of arr.entries()) {
//     if (line.includes("map")) {
//       mapName = line.replace(" map:", "");

//       result[mapName] = {};
//     } else {
//       const [key, ...values] = line.split(" ").map(Number);
//       if (!isNaN(key)) {
//         result[mapName][index] = [key, ...values];
//       }
//     }
//   }

//   return result;
// };

// const numberRange = (start: number, end: number) => {
//   return new Array(end - start).fill(undefined).map((d, i) => i + start);
// };
// const parseNumbers = (str: string) =>
//   str
//     .split(" ")
//     .filter((x) => x !== "")
//     .map((x) => parseInt(x));
// const groupNumbers = (numbers: number[], grouping: number): number[][] =>
//   Array.from({ length: numbers.length / grouping }, (_, i) =>
//     numbers.slice(i * grouping, i * grouping + grouping)
//   );

const part1 = (input: string) => {
  // let [seeds, ...maps] = input.split("\n\n");
  // seeds = seeds.match(/\d+/g).map(Number);
  // for (let map of maps) {
  //   map = map
  //     .split("\n")
  //     .slice(1)
  //     .map((line) => line.match(/\d+/g).map(Number));
  //   for (let i = 0; i < seeds.length; i++) {
  //     const seed = seeds[i];
  //     for (const [dest, source, len] of map) {
  //       if (seed >= source && seed < source + len) {
  //         seeds[i] = seeds[i] - source + dest;
  //         break;
  //       }
  //     }
  //   }
  // }

  // const mappedInputs = parseArray(inputs);

  const DESTINATION_RANGE_START_INDEX = 0;
  const SOURCE_RANGE_START_INDEX = 1;
  const RANGE_LENGTH_INDEX = 2;

  // const seedSoilMap = Object.values(mappedInputs["seed-to-soil"]).map((mi) => {
  //   const [destinationRangeStart, sourceRangeStart, rangeLength] = mi;
  //   return {
  //     dest: numberRange(
  //       destinationRangeStart,
  //       destinationRangeStart + rangeLength
  //     ),
  //     source: numberRange(sourceRangeStart, sourceRangeStart + rangeLength),
  //   };
  // });

  // const soilFertilizerMap = Object.values(
  //   mappedInputs["soil-to-fertilizer"]
  // ).map((mi) => {
  //   const [destinationRangeStart, sourceRangeStart, rangeLength] = mi;
  //   return {
  //     dest: numberRange(
  //       destinationRangeStart,
  //       destinationRangeStart + rangeLength
  //     ),
  //     source: numberRange(sourceRangeStart, sourceRangeStart + rangeLength),
  //   };
  // });

  // const fertilizerWaterMap = Object.values(
  //   mappedInputs["fertilizer-to-water"]
  // ).map((mi) => {
  //   const [destinationRangeStart, sourceRangeStart, rangeLength] = mi;
  //   return {
  //     dest: numberRange(
  //       destinationRangeStart,
  //       destinationRangeStart + rangeLength
  //     ),
  //     source: numberRange(sourceRangeStart, sourceRangeStart + rangeLength),
  //   };
  // });

  // const waterLightMap = Object.values(mappedInputs["water-to-light"]).map(
  //   (mi) => {
  //     const [destinationRangeStart, sourceRangeStart, rangeLength] = mi;
  //     return {
  //       dest: numberRange(
  //         destinationRangeStart,
  //         destinationRangeStart + rangeLength
  //       ),
  //       source: numberRange(sourceRangeStart, sourceRangeStart + rangeLength),
  //     };
  //   }
  // );

  // const lightTemperatureMap = Object.values(
  //   mappedInputs["light-to-temperature"]
  // ).map((mi) => {
  //   const [destinationRangeStart, sourceRangeStart, rangeLength] = mi;
  //   return {
  //     dest: numberRange(
  //       destinationRangeStart,
  //       destinationRangeStart + rangeLength
  //     ),
  //     source: numberRange(sourceRangeStart, sourceRangeStart + rangeLength),
  //   };
  // });

  // const temperatureHumidityMap = Object.values(
  //   mappedInputs["temperature-to-humidity"]
  // ).map((mi) => {
  //   const [destinationRangeStart, sourceRangeStart, rangeLength] = mi;
  //   return {
  //     dest: numberRange(
  //       destinationRangeStart,
  //       destinationRangeStart + rangeLength
  //     ),
  //     source: numberRange(sourceRangeStart, sourceRangeStart + rangeLength),
  //   };
  // });

  // const humidityLocationMap = Object.values(
  //   mappedInputs["humidity-to-location"]
  // ).map((mi) => {
  //   const [destinationRangeStart, sourceRangeStart, rangeLength] = mi;
  //   return {
  //     dest: numberRange(
  //       destinationRangeStart,
  //       destinationRangeStart + rangeLength
  //     ),
  //     source: numberRange(sourceRangeStart, sourceRangeStart + rangeLength),
  //   };
  // });

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
