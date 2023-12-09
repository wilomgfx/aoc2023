const part1 = (input: string) => {
  const inputs = input
    .split("\n")
    .map((i) => i.trim())
    .filter((i) => i !== "");

  const computeNumberSteps = (input: string) => {
    const numbers = input.split(" ").map((n) => parseInt(n));
    const steps = numbers.slice(1).map((n, i) => n - numbers[i]);
    return steps;
  };
  const allSteps = inputs.map((i) => {
    const initialSteps = computeNumberSteps(i);
    const steps: number[][] = [initialSteps];
    let currentSteps: number[][] = [initialSteps];
    while (currentSteps[0].some((s) => s !== 0)) {
      currentSteps = [computeNumberSteps(currentSteps[0].join(" "))];
      steps.push(...currentSteps);
    }

    return steps;
  });

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
