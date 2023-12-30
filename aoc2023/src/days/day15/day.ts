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
    .split(",")
    .map((i) => i.trim())
    .filter((i) => i !== "")


  const boxes = new Map<number, Map<string, number>>();
  for(const line of inputs) {
    const [label, focalStrength] = line.replace('-', '').split("=");
    const boxIndex = computeHash(label);
    const lenses = boxes.get(boxIndex) ?? new Map<string, number>();
    if (focalStrength === undefined) {
       // operation was "-", they never have a focal strength
			lenses.delete(label);
		} else {
      lenses.set(label, parseInt(focalStrength));
		}

    boxes.set(boxIndex, lenses);
  }

  // get total focal strength
  let totalFocusPower = 0;
	for (const [boxIndex, lenses] of boxes.entries()) {
		let lensePosition = 1;
		for (const lense of lenses.values()) {
			const lensFocusPower = (boxIndex + 1) * lensePosition * lense;
			totalFocusPower += lensFocusPower;
			lensePosition += 1;
		}
	}

  const answer = totalFocusPower
  return answer;
};

export { part1, part2 };
