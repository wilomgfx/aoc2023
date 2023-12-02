const part1 = (input: string) => {
  const inputs = input
    .split("\n")
    .map((i) => i.trim())
    .filter((i) => i !== "");

  const NUMBER_COLOR_REGEX = /(\d+)\s(\w+)/g;
  const MAX_RED_CUBES = 12;
  const MAX_GREEN_CUBES = 13;
  const MAX_BLUE_CUBES = 14;
  const validGames = inputs.filter((g) => {
    const gameWithoutId = g.split(":")[1].trim();
    let match;
    const result = {} as Record<string, number[]>;

    while ((match = NUMBER_COLOR_REGEX.exec(gameWithoutId)) !== null) {
      const number = parseInt(match[1]);
      const color = match[2];

      if (result[color]) {
        result[color].push(number);
      } else {
        result[color] = [number];
      }
    }
    return (
      result["red"].every((r) => r <= MAX_RED_CUBES) &&
      result["green"].every((r) => r <= MAX_GREEN_CUBES) &&
      result["blue"].every((r) => r <= MAX_BLUE_CUBES)
    );
  });
  const validGamesIds = validGames.map((g) => {
    const id = g.split(":")[0].trim();
    const gameIdRegex = /Game\s(\d+)/;
    const match = id.match(gameIdRegex) || []; //should not happen, but heh :)
    return match[1];
  });
  const gameIdsSum = validGamesIds.reduce((a, b) => a + parseInt(b), 0);
  const answer = gameIdsSum;
  return answer;
};

const part2 = (input: string) => {
  const inputs = input
    .split("\n")
    .map((i) => i.trim())
    .filter((i) => i !== "");

  const NUMBER_COLOR_REGEX = /(\d+)\s(\w+)/g;
  // const MAX_RED_CUBES = 12;
  // const MAX_GREEN_CUBES = 13;
  // const MAX_BLUE_CUBES = 14;
  const validGames = inputs.map((g) => {
    const gameId = g.split(":")[0].trim();
    const gameWithoutId = g.split(":")[1].trim();
    let match;
    const result = {} as Record<string, number[]>;

    while ((match = NUMBER_COLOR_REGEX.exec(gameWithoutId)) !== null) {
      const number = parseInt(match[1]);
      const color = match[2];

      if (result[color]) {
        result[color].push(number);
      } else {
        result[color] = [number];
      }
    }
    return {
      id: gameId,
      red: Math.max(...result["red"]),
      green: Math.max(...result["green"]),
      blue: Math.max(...result["blue"]),
    };
  });
  const gamePowers = validGames.map((g) => {
    const power = g.red * g.green * g.blue;
    return power;
  });
  const powerSum = gamePowers.reduce((a, b) => a + b, 0);
  const answer = powerSum;
  return answer;
};

export { part1, part2 };
