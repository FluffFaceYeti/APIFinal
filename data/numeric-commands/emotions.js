const emotions = {
  happiness: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Your Happiness",
    unitSpace: true,
    template: (sender, value, joke) =>
      `${sender}, Your happiness is ${value}% today! ${joke}`,
  },
  anger: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Your Anger Level",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, Your anger level is ${value}% today! ${joke}`,
  },
  calmness: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Your Calmness",
    unitSpace: true,
    template: (sender, value, joke) =>
      `${sender}, Your calmness is ${value}% today! ${joke}`,
  },
  joy: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Your Joy Level",
    unitSpace: true,
    template: (sender, value, joke) =>
      `${sender}, Your joy level is ${value}% today! ${joke}`,
  },
  excitement: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Your Excitement",
    unitSpace: true,
    template: (sender, value, joke) =>
      `${sender}, Your excitement is ${value}% today! ${joke}`,
  },
  energy: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Your Energy Level",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, Your energy level is ${value}% today! ${joke}`,
  },
  sleep: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Your Tiredness Level",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, Your tiredness level is ${value}% today! ${joke}`,
  },
  sadness: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Your Sadness Level",
    unitSpace: true,
    template: (sender, value, joke) =>
      `${sender}, Your sadness level is ${value}% today! ${joke}`,
  },
  anxiety: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Your Anxiety Level",
    unitSpace: true,
    template: (sender, value, joke) =>
      `${sender}, Your anxiety level is ${value}% today! ${joke}`,
  },
  love: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Your Love Level",
    unitSpace: true,
    template: (sender, value, joke) =>
      `${sender}, Your love level is ${value}% today! ${joke}`,
  },
  nostalgia: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Your Nostalgia Level",
    unitSpace: true,
    template: (sender, value, joke) =>
      `${sender}, You're feeling ${value}% nostalgic today! ${joke}`,
  },
  gratitude: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Your Gratitude Level",
    unitSpace: true,
    template: (sender, value, joke) =>
      `${sender}, Your gratitude level is ${value}% today! ${joke}`,
  },
  guilt: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Your Guilt Level",
    unitSpace: true,
    template: (sender, value, joke) =>
      `${sender}, Your guilt level is ${value}% today! ${joke}`,
  },
  pride: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Your Pride Level",
    unitSpace: true,
    template: (sender, value, joke) =>
      `${sender}, Your pride level is ${value}% today! ${joke}`,
  },
  frustration: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Your Frustration Level",
    unitSpace: true,
    template: (sender, value, joke) =>
      `${sender}, Your frustration level is ${value}% today! ${joke}`,
  },
  hope: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Your Hope Level",
    unitSpace: true,
    template: (sender, value, joke) =>
      `${sender}, Your hope level is ${value}% today! ${joke}`,
  },
  love_hate_balance: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Your Love vs Hate Balance",
    unitSpace: true,
    template: (sender, value, joke) =>
      `${sender}, Your love vs hate balance is ${value}% today! ${joke}`,
  },
};
export default emotions;