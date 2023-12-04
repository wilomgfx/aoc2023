const part1 = (input: string) => {
  const inputs = input
    .split("\n")
    .map((i) => i.trim())
    .filter((i) => i !== "");
  const adjacentNumbers = inputs.map((input, index) => {
    const nextRow = inputs[index + 1];
    if (nextRow) {
      // check every character in the row
      const characters = input.split("");
      const nextCharacters = nextRow.split("");
      const adjacentCharacters = characters.map((character, index) => {
        const nextCharacter = nextCharacters[index];
        if (nextCharacter) {
          if (!isNaN(parseInt(character)) && !isNaN(parseInt(nextCharacter))) {
            if (nextCharacter !== ".") {
              return character;
            }
          }
        }
        return "";
      });
    }
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
