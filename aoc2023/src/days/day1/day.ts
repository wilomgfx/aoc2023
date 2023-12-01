const part1 = (input: string) => {
  const inputs = input
    .split("\n")
    .map((i) => i.trim())
    .filter((i) => i !== "");
  const calibrationValues = inputs.map((i) => {
    const letters = i.split("");
    const numbers = letters
      .filter((l) => {
        const n = parseInt(l);
        return !isNaN(n);
      })
      .map((l) => parseInt(l));
    const newNumber =
      numbers.length > 1
        ? parseInt(`${numbers[0]}${numbers[numbers.length - 1]}`)
        : parseInt(`${numbers[0]}${numbers[0]}`);
    return newNumber;
  });
  const answer = calibrationValues.reduce((a, b) => a + b, 0);
  return answer;
};

const part2 = (input: string) => {
  const inputs = input
    .split("\n")
    .map((i) => i.trim())
    .filter((i) => i !== "");

  const digitsRegexForward = "\\d|one|two|three|four|five|six|seven|eight|nine";
  const digitsRegexReverse = "\\d|eno|owt|eerht|ruof|evif|xis|neves|thgie|enin";
  const stringToNumberConversion = {
    "1": "1",
    one: "1",
    eno: "1",
    "2": "2",
    two: "2",
    owt: "2",
    "3": "3",
    three: "3",
    eerht: "3",
    "4": "4",
    four: "4",
    ruof: "4",
    "5": "5",
    five: "5",
    evif: "5",
    "6": "6",
    six: "6",
    xis: "6",
    "7": "7",
    seven: "7",
    neves: "7",
    "8": "8",
    eight: "8",
    thgie: "8",
    "9": "9",
    nine: "9",
    enin: "9",
  } as Record<string, string>;

  const calibrationValues = inputs.map((i) => {
    const firstDigit = i.match(digitsRegexForward) || "cant happen";
    const lastDigit =
      i.split("").reverse().join("").match(digitsRegexReverse) || "cant happen";
    const newNumber = parseInt(
      `${stringToNumberConversion[firstDigit[0]]}${
        stringToNumberConversion[lastDigit[0]]
      }`
    );
    return newNumber;
  });

  const answer = calibrationValues.reduce((a, b) => a + b, 0);
  return answer;
};

export { part1, part2 };
