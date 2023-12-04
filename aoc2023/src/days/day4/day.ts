const part1 = (input: string) => {
  const inputs = input
    .split("\n")
    .map((i) => i.trim())
    .filter((i) => i !== "");
  const cardAndNumbersMapping = inputs.map((i) => {
    const [card, numbers] = i.split(":");
    const [winningNumbers, drawnNumbers] = numbers.split("|");
    return {
      card: card.trim(),
      winningNumbers: winningNumbers
        .trim()
        .split(" ")
        .filter((wn) => wn !== ""),
      drawnNumbers: drawnNumbers
        .trim()
        .split(" ")
        .filter((wn) => wn !== ""),
    };
  });
  const pointsPerCard = cardAndNumbersMapping.map((m) => {
    const points = m.winningNumbers.reduce((acc, wn) => {
      if (m.drawnNumbers.includes(wn)) {
        if (acc > 1) {
          return acc * 2;
        } else {
          return acc + 1;
        }
      }
      return acc;
    }, 0);
    return {
      card: m.card,
      points,
    };
  });

  const totalPoints = pointsPerCard.reduce((acc, ppc) => {
    return acc + ppc.points;
  }, 0);
  const answer = totalPoints;
  return answer;
};

const part2 = (input: string) => {
  const inputs = input
    .split("\n")
    .map((i) => i.trim())
    .filter((i) => i !== "");

  const nCards = inputs.map(() => 1);
  for (let i = 0; i < inputs.length; i++) {
    const line = inputs[i];
    const [, numbers] = line.split(":");
    const [winningNumbers, drawnNumbers] = numbers.split("|");
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const winsNumbers = winningNumbers.match(/\d+/g).map(Number);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const drawNumbers = drawnNumbers.match(/\d+/g).map(Number);
    const nWins = drawNumbers.filter((n) => winsNumbers.includes(n)).length;
    for (let j = 0; j < nWins; j++) {
      nCards[i + 1 + j] += nCards[i];
    }
  }

  const answer = nCards.reduce((acc, n) => acc + n);
  return answer;
};

export { part1, part2 };
