const computeNumberSteps = (input: string) => {
  const numbers = input.split(" ").map((n) => parseInt(n));
  const steps = numbers.slice(1).map((n, i) => n - numbers[i]);
  return steps;
};

const part1 = (input: string) => {
  const inputs = input
    .split("\n")
    .map((i) => i.trim())
    .filter((i) => i !== "");

  const allSteps = inputs.map((i) => {
    const initialSteps = computeNumberSteps(i);
    const inputAsNumbers = i.split(" ").map((n) => parseInt(n));
    const steps: number[][] = [inputAsNumbers, initialSteps];
    let currentSteps: number[][] = [initialSteps];
    while (currentSteps[0].some((s) => s !== 0)) {
      currentSteps = [computeNumberSteps(currentSteps[0].join(" "))];
      steps.push(...currentSteps);
    }

    return steps;
  });

  const values = allSteps.map((s) => {
    let currentTotal = 0;
    const reversedSteps = [...s].reverse();
    reversedSteps.forEach((steps, index) => {
      // const lastItemOfCurrent = steps[steps.length - 1];
      const nextItem = reversedSteps[index + 1];
      const lastItemOfNext = nextItem ? nextItem[nextItem.length - 1] : 0;
      currentTotal += lastItemOfNext;
    });
    return currentTotal;
  });

  const sumOfValues = values.reduce((acc, v) => acc + v, 0);
  const answer = sumOfValues;
  return answer;
};

const part2 = (input: string) => {
  const inputs = input
    .split("\n")
    .map((i) => i.trim())
    .filter((i) => i !== "");

  const allSteps = inputs.map((i) => {
    // just reverse the input and run the same code as part 1
    const reversedInput = i.split(" ").reverse().join(" ");
    const initialSteps = computeNumberSteps(reversedInput);
    const inputAsNumbers = reversedInput.split(" ").map((n) => parseInt(n));
    const steps: number[][] = [inputAsNumbers, initialSteps];
    let currentSteps: number[][] = [initialSteps];
    while (currentSteps[0].some((s) => s !== 0)) {
      currentSteps = [computeNumberSteps(currentSteps[0].join(" "))];
      steps.push(...currentSteps);
    }

    return steps;
  });

  const values = allSteps.map((s) => {
    let currentTotal = 0;
    const reversedSteps = [...s].reverse();
    reversedSteps.forEach((steps, index) => {
      // const lastItemOfCurrent = steps[steps.length - 1];
      const nextItem = reversedSteps[index + 1];
      const lastItemOfNext = nextItem ? nextItem[nextItem.length - 1] : 0;
      currentTotal += lastItemOfNext;
    });
    return currentTotal;
  });

  const sumOfValues = values.reduce((acc, v) => acc + v, 0);
  const answer = sumOfValues;
  return answer;
};

export { part1, part2 };
