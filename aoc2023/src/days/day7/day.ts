enum HandTypes {
  HighCard = "HighCard",
  OnePair = "OnePair",
  TwoPair = "TwoPair",
  ThreeOfAKind = "ThreeOfAKind",
  FullHouse = "FullHouse",
  FourOfAKind = "FourOfAKind",
  FiveOfAKind = "FiveOfAKind",
}
const computeHandType = (hand: string) => {
  const cards = hand.split("");
  const cardGroups = cards.reduce(
    (a, c) => ((a[c] = a[c] || 0), a[c]++, a),
    {} as Record<string, number>
  );
  if (Object.keys(cardGroups).length === 1) {
    // FiveOfAKind
    return HandTypes.FiveOfAKind;
  }
  const handType = "N/A";
  return handType;
};
const part1 = (input: string) => {
  const inputs = input
    .split("\n")
    .map((i) => i.trim())
    .filter((i) => i !== "");

  const handsBidMapping = inputs.reduce((acc, curr) => {
    const [hand, bid] = curr.split(" ");
    acc[hand] = bid;
    return acc;
  }, {} as Record<string, string>);

  const handsTypeMapping = Object.keys(handsBidMapping).reduce((acc, curr) => {
    const hand = curr;
    const handType = computeHandType(hand);
    acc[hand] = handType;
    return acc;
  }, {} as Record<string, string>);

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
