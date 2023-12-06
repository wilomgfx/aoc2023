const part1 = (input: string) => {
  const inputs = input.trim().split("\n\n");

  const [seeds, ...mappings] = inputs;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const seedNumbers = seeds.match(/\d+/g).map(Number);
  for (const mapping of mappings) {
    const newMap = mapping
      .trim()
      .split("\n")
      .slice(1)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      .map((line) => line.match(/\d+/g).map(Number));
    for (let i = 0; i < seedNumbers.length; i++) {
      const seed = seedNumbers[i];
      for (const [dest, source, len] of newMap) {
        if (seed >= source && seed < source + len) {
          seedNumbers[i] = seedNumbers[i] - source + dest;
          break;
        }
      }
    }
  }

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

  const answer = Math.min(...seedNumbers);
  return answer;
};

const part2 = (input: string) => {
  const inputs = input.trim().split("\n\n");

  const [seeds, ...mappings] = inputs;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const seedNumbers = seeds.match(/\d+/g).map(Number);
  const nextSeeds: number[][] = [];
  let allTheSeeds: number[][] = [];
  for (let i = 0; i < seedNumbers.length; i += 2) {
    nextSeeds.push([seedNumbers[i], seedNumbers[i] + seedNumbers[i + 1] - 1]);
  }
  allTheSeeds = nextSeeds;

  for (const mapping of mappings) {
    const newMap = mapping
      .trim()
      .split("\n")
      .slice(1)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      .map((line) => line.match(/\d+/g).map(Number));

    const movedSeeds = [];
    for (const [dest, source, len] of newMap) {
      const unmovedSeeds = [];
      for (const [start, end] of allTheSeeds) {
        if (start < source + len && end >= source) {
          movedSeeds.push([
            Math.max(start, source) - source + dest,
            Math.min(end, source + len - 1) - source + dest,
          ]);
        }
        if (start < source) {
          unmovedSeeds.push([start, Math.min(end, source - 1)]);
        }
        if (end >= source + len) {
          unmovedSeeds.push([Math.max(start, source + len), end]);
        }
      }
      allTheSeeds = unmovedSeeds;
    }
    allTheSeeds.push(...movedSeeds);
  }

  const answer = Math.min(...allTheSeeds.flat());
  return answer;
};

export { part1, part2 };
