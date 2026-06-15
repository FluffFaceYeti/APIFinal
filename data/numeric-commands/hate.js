const hate = {
  milahate: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Mila Hates You",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, Mila hates you ${value}% today! ${joke}`,
  },
  ivyhate: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Ivy Hates You",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, Ivy hates you ${value}% today! ${joke}`,
  },
  theohate: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Theo Hates You",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, Theo hates you ${value}% today! ${joke}`,
  },
};
export default hate;