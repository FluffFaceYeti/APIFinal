const love = {
  flame: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Flame Loves You",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, AgentFlame loves you ${value}% today! ${joke}`,
  },
  mila: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Mila Loves You",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, Mila loves you ${value}% today! ${joke}`,
  },
  ivy: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Ivy Loves You",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, Ivy loves you ${value}% today! ${joke}`,
  },
  theo: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Theo Loves You",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, Theo loves you ${value}% today! ${joke}`,
  },
  face: {
    min: 0,
    max: 100,
    levels: [30, 70],
    label: "Titch Rates your face",
    unit: "%",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, Titch rates your face ${value}% today! ${joke}`,
  },
};
export default love;