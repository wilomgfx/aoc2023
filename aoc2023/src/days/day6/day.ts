const part1 = (input: string) => {
  const inputs = input
    .split("\n")
    .map((i) => i.trim())
    .filter((i) => i !== "");

  const BASE_BOAT_SPEED = 0; // mm/s
  const SPEED_INCREASE_PER_SECOND = 1; // mm/s

  const times = inputs[0]
    .split(" ")
    .map((i) => parseInt(i))
    .filter((i) => !isNaN(i));
  const distances = inputs[1]
    .split(" ")
    .map((i) => parseInt(i))
    .filter((i) => !isNaN(i));

  const computePossibleWaysToBeatRecords = () => {
    const possibleWaysToBeatRecords = new Map<number, number[]>();

    for (let i = 0; i < times.length; i++) {
      possibleWaysToBeatRecords.set(i, []);
      const distanceToBeat = distances[i];
      const maxTime = times[i];

      for (let j = 0; j < maxTime; j++) {
        const currentSpeed = BASE_BOAT_SPEED + SPEED_INCREASE_PER_SECOND * j;
        const currentPossibleDistance = currentSpeed * (maxTime - j);
        if (currentPossibleDistance > distanceToBeat) {
          possibleWaysToBeatRecords.get(i)?.push(currentPossibleDistance);
        }
      }
    }

    return possibleWaysToBeatRecords;
  };
  const possibleWaysToBeatRecords = Array.from(
    computePossibleWaysToBeatRecords().values()
  ).map((i) => i.length);
  const errorMargin = possibleWaysToBeatRecords.reduce(
    (acc, curr) => acc * curr,
    1
  );
  const answer = errorMargin;
  return answer;
};

const part2 = (input: string) => {
  const inputs = input
    .split("\n")
    .map((i) => i.trim())
    .filter((i) => i !== "");
  const BASE_BOAT_SPEED = 0; // mm/s
  const SPEED_INCREASE_PER_SECOND = 1; // mm/s

  const maxTime = parseInt(
    inputs[0]
      .split(" ")
      .map((i) => parseInt(i))
      .filter((i) => !isNaN(i))
      .join("")
  );
  const distanceToBeat = parseInt(
    inputs[1]
      .split(" ")
      .map((i) => parseInt(i))
      .filter((i) => !isNaN(i))
      .join("")
  );

  const computePossibleWaysToBeatRecords = () => {
    const possibleWaysToBeatRecords = [];

    for (let i = 0; i < maxTime; i++) {
      const currentSpeed = BASE_BOAT_SPEED + SPEED_INCREASE_PER_SECOND * i;
      const currentPossibleDistance = currentSpeed * (maxTime - i);
      if (currentPossibleDistance > distanceToBeat) {
        possibleWaysToBeatRecords.push(currentPossibleDistance);
      }
    }

    return possibleWaysToBeatRecords;
  };
  const possibleWaysToBeatRecords = computePossibleWaysToBeatRecords().length;
  const answer = possibleWaysToBeatRecords;
  return answer;
};

export { part1, part2 };
