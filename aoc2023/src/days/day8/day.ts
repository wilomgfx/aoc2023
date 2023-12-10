type Direction = { L: string; R: string };

const GCD = (a: number, b: number): number => {
  if (b === 0) return a;
  return GCD(b, a % b);
};
const LCM = (a: number, b: number): number => {
  return (a * b) / GCD(a, b);
};

const part1 = (input: string) => {
  const inputs = input
    .split("\n")
    .map((i) => i.trim())
    .filter((i) => i !== "");
  const instructions = inputs[0];
  const nodes = inputs.slice(1);

  const network = nodes.reduce((acc, line) => {
    const match = /([0-9A-Z]{3}) = \(([0-9A-Z]{3}), ([0-9A-Z]{3})\)/g.exec(
      line
    );
    if (match) {
      const [, parent, left, right] = match;
      acc[parent] = { L: left, R: right };
    }
    return acc;
  }, {} as Record<string, Direction>);

  let next = "AAA";
  let steps = 0;
  while (next !== "ZZZ") {
    const nextInstruction = instructions[
      steps % instructions.length
    ] as keyof Direction;
    next = network[next][nextInstruction];
    steps++;
  }

  return steps;
};

const part2 = (input: string) => {
  const inputs = input
    .split("\n")
    .map((i) => i.trim())
    .filter((i) => i !== "");
  const instructions = inputs[0];
  const allNodes = inputs.slice(1);

  const network = allNodes.reduce((acc, line) => {
    const match = /([0-9A-Z]{3}) = \(([0-9A-Z]{3}), ([0-9A-Z]{3})\)/g.exec(
      line
    );
    if (match) {
      const [, parent, left, right] = match;
      acc[parent] = { L: left, R: right };
    }
    return acc;
  }, {} as Record<string, Direction>);

  let nodes = [...Object.keys(network)].filter((key) => key.endsWith("A"));
  const ghostSteps = [];
  let steps = 0;
  while (!nodes.every((n) => n.endsWith("Z"))) {
    const nextInstruction = instructions[
      steps % instructions.length
    ] as keyof Direction;
    const nextNodes = nodes
      .map((n) => network[n][nextInstruction])
      .filter((n) => !n.endsWith("Z"));
    steps++;
    if (nodes.length !== nextNodes.length) {
      ghostSteps.push(steps);
    }
    nodes = nextNodes;
  }

  const answer = ghostSteps.reduce(LCM, 1);
  return answer;
};

export { part1, part2 };
