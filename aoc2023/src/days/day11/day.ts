type Point = {
  readonly x: number;
  readonly y: number;
};
const getGalaxiesLocations = (inputs: string[]): Point[] => {
  const galaxies: Point[] = [];
  inputs.forEach((line, y) => {
    line.split("").forEach((char, x) => {
      if (char === "#") {
        galaxies.push({ x, y });
      }
    });
  });
  return galaxies;
}
// borrowed, way smarter than my solution of just expanding the grid
const expandedSpaceBetween = (a: number, b: number, fixedPoints: number[], expansionFactor = 2) => {
  const between = Math.max(0, Math.abs(a - b) - 1);
  const fixed = fixedPoints.filter((p) => p > Math.min(a, b) && p < Math.max(a, b)).length;
  return (between - fixed) * (expansionFactor - 1);
}
const part1 = (input: string) => {
  const inputs = input
    .split("\n")
    .map((i) => i.trim())
    .filter((i) => i !== "");

  const galaxies = getGalaxiesLocations(inputs)

  const columnsWithGalaxies = [...new Set(galaxies.map((g) => g.x).sort())];
	const rowsWithGalaxies = [...new Set(galaxies.map((g) => g.y).sort())];

  let totalDistance = 0;
	for (let i = 0; i < galaxies.length; i++) {
		for (let y = i + 1; y < galaxies.length; y++) {
			const {x: x1, y: y1} = galaxies[i];
			const {x: x2, y: y2} = galaxies[y];
			const distanceX = Math.abs(x1 - x2);
			const distanceY = Math.abs(y1 - y2);
      const manhattanDistance = distanceX + distanceY + expandedSpaceBetween(x1, x2, columnsWithGalaxies) + expandedSpaceBetween(y1, y2, rowsWithGalaxies);
			totalDistance += manhattanDistance;
		}
  }

  const answer = totalDistance
  return answer;
};

const part2 = (input: string) => {
  const EXPANSION_FACTOR = 1_000_000;
  const inputs = input
    .split("\n")
    .map((i) => i.trim())
    .filter((i) => i !== "");

    const galaxies = getGalaxiesLocations(inputs)

  const columnsWithGalaxies = [...new Set(galaxies.map((g) => g.x).sort())];
	const rowsWithGalaxies = [...new Set(galaxies.map((g) => g.y).sort())];

  let totalDistance = 0;
	for (let i = 0; i < galaxies.length; i++) {
		for (let y = i + 1; y < galaxies.length; y++) {
			const {x: x1, y: y1} = galaxies[i];
			const {x: x2, y: y2} = galaxies[y];
			const distanceX = Math.abs(x1 - x2);
			const distanceY = Math.abs(y1 - y2);
      const manhattanDistance = distanceX + distanceY + expandedSpaceBetween(x1, x2, columnsWithGalaxies, EXPANSION_FACTOR) + expandedSpaceBetween(y1, y2, rowsWithGalaxies, EXPANSION_FACTOR);
			totalDistance += manhattanDistance;
		}
  }

  const answer = totalDistance
  return answer;
};

export { part1, part2 };
