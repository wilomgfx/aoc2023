enum HandTypes {
  HighCard = "HighCard",
  OnePair = "OnePair",
  TwoPair = "TwoPair",
  ThreeOfAKind = "ThreeOfAKind",
  FullHouse = "FullHouse",
  FourOfAKind = "FourOfAKind",
  FiveOfAKind = "FiveOfAKind",
  Unknown = "Unknown",
}

// 23456789TJQKA
// const CARD_LABEL_RANKING = "23456789AJKQT";
const CARD_LABEL_RANKING = "23456789TJQKA";

const HAND_TYPE_RANKING = {
  [HandTypes.FiveOfAKind]: 6,
  [HandTypes.FourOfAKind]: 5,
  [HandTypes.FullHouse]: 4,
  [HandTypes.ThreeOfAKind]: 3,
  [HandTypes.TwoPair]: 2,
  [HandTypes.OnePair]: 1,
  [HandTypes.HighCard]: 0,
} as Record<string, number>;

/**
 * Returns a number whose value is limited to the given range.
 *
 * @param {Number} val The initial value
 * @param {Number} min The lower boundary
 * @param {Number} max The upper boundary
 * @returns {Number} A number in the range (min, max)
 */
const clamp = (val: number, min: number, max: number): number =>
  Math.min(Math.max(val, min), max);

const computeHandType = (hand: string) => {
  const cards = hand.split("");
  const cardGroups = cards.reduce(
    (a, c) => ((a[c] = a[c] || 0), a[c]++, a),
    {} as Record<string, number>
  );
  const cardGroupsKeys = Object.keys(cardGroups);
  if (cardGroupsKeys.length === 5) {
    // HighCard
    return HandTypes.HighCard;
  }
  if (cardGroupsKeys.length === 1) {
    // FiveOfAKind
    return HandTypes.FiveOfAKind;
  }
  if (cardGroupsKeys.some((k) => cardGroups[k] === 4)) {
    // FourOfAKind
    return HandTypes.FourOfAKind;
  }
  if (cardGroupsKeys.some((k) => cardGroups[k] === 3)) {
    // ThreeOfAKind
    const remainingCards = cardGroupsKeys.filter((k) => cardGroups[k] !== 3);
    if (remainingCards.length === 2) {
      // ThreeOfAKind
      return HandTypes.ThreeOfAKind;
    }
    return HandTypes.FullHouse;
  }
  if (cardGroupsKeys.some((k) => cardGroups[k] === 2)) {
    // OnePair
    const remainingCards = cardGroupsKeys.filter((k) => cardGroups[k] !== 2);
    if (remainingCards.length === 3) {
      // OnePair
      return HandTypes.OnePair;
    }
    return HandTypes.TwoPair;
  }

  return HandTypes.Unknown;
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

  const numberOfHands = Object.keys(handsBidMapping).length;

  const handsTypeMapping = Object.keys(handsBidMapping).reduce((acc, curr) => {
    const hand = curr;
    const handType = computeHandType(hand);
    acc[hand] = handType;
    return acc;
  }, {} as Record<string, string>);

  const handsTypesGrouped = Object.keys(handsTypeMapping).reduce(
    (acc, curr) => {
      const handType = handsTypeMapping[curr];
      acc[handType] = acc[handType] || [];
      acc[handType].push(curr);
      return acc;
    },
    {} as Record<string, string[]>
  );

  const handsOrderingMapping = Object.keys(handsTypesGrouped).reduce(
    (acc, curr) => {
      const hands = handsTypesGrouped[curr];
      const handsSorted = hands.sort((a, b) => {
        const aLabels = a.split("").join("");
        const bLabels = b.split("").join("");
        for (let i = 0; i < aLabels.length; i++) {
          const aLabel = aLabels[i];
          const bLabel = bLabels[i];
          if (
            CARD_LABEL_RANKING.indexOf(bLabel) >
            CARD_LABEL_RANKING.indexOf(aLabel)
          ) {
            return -1;
          }
          if (
            CARD_LABEL_RANKING.indexOf(bLabel) <
            CARD_LABEL_RANKING.indexOf(aLabel)
          ) {
            return 1;
          }
        }
        return 0;
      });
      acc[curr] = handsSorted;
      return acc;
    },
    {} as Record<string, string[]>
  );

  const handsRankRanking = Object.keys(handsOrderingMapping).reduce(
    (acc, curr) => {
      const hands = handsOrderingMapping[curr];
      const handsSorted = hands.sort((a, b) => {
        const aLabels = a.split("").join("");
        const bLabels = b.split("").join("");
        for (let i = 0; i < aLabels.length; i++) {
          const aLabel = aLabels[i];
          const bLabel = bLabels[i];
          if (
            CARD_LABEL_RANKING.indexOf(bLabel) >
            CARD_LABEL_RANKING.indexOf(aLabel)
          ) {
            return -1;
          }
          if (
            CARD_LABEL_RANKING.indexOf(bLabel) <
            CARD_LABEL_RANKING.indexOf(aLabel)
          ) {
            return 1;
          }
        }
        return 0;
      });
      acc[curr] = handsSorted;
      return acc;
    },
    {} as Record<string, string[]>
  );

  const handsRankMapping = Object.keys(handsOrderingMapping).reduce(
    (acc, curr) => {
      const hands = handsOrderingMapping[curr];
      hands.forEach((h, i) => {
        acc[h] = clamp(i + HAND_TYPE_RANKING[curr], 1, numberOfHands);
      });
      return acc;
    },
    {} as Record<string, number>
  );

  const totalWinnings = Object.keys(handsBidMapping).reduce((acc, curr) => {
    const bid = parseInt(handsBidMapping[curr], 10);
    const rank = handsRankMapping[curr];
    const winnings = bid * rank;
    return acc + winnings;
  }, 0);

  const answer = totalWinnings;
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
