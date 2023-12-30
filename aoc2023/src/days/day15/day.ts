const computeHash = (str: string) => {
  let hash = 0;
	for (let i = 0; i < str.length; i++) {
		hash += str.charCodeAt(i);
		hash *= 17;
		hash %= 256;
	}
	return hash;
}

const part1 = (input: string) => {
  const inputs = input
    .split(",")
    .map((i) => i.trim())
    .filter((i) => i !== "");

  const answer = inputs.map(computeHash).reduce((a, b) => a + b, 0);
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
