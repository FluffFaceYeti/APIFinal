const actions = {
  squeeze: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Your Squeeze Strength",
    unitSpace: true,
    template: (sender, value, joke) =>
      `${sender}, Your squeeze strength is ${value}% today! ${joke}`,
  },
  push: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "kg",
    label: "Your Push Power",
    unitSpace: true,
    template: (sender, value, joke) =>
      `${sender}, Your push power is ${value}kg today! ${joke}`,
  },
  jump: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "cm",
    label: "Your Jump Height",
    unitSpace: true,
    template: (sender, value, joke) =>
      `${sender}, Your jump height is ${value}cm today! ${joke}`,
  },
  press: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "kg",
    label: "Your Press Strength",
    unitSpace: true,
    template: (sender, value, joke) =>
      `${sender}, Your press strength is ${value}kg today! ${joke}`,
  },
  kick: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Your Kick Power",
    unitSpace: true,
    template: (sender, value, joke) =>
      `${sender}, Your kick power is ${value}% today! ${joke}`,
  },
  dodge: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Your Dodge Agility",
    unitSpace: true,
    template: (sender, value, joke) =>
      `${sender}, Your dodge agility is ${value}% today! ${joke}`,
  },
  roll: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "m",
    label: "Your Roll Distance",
    unitSpace: true,
    template: (sender, value, joke) =>
      `${sender}, You can roll ${value}m today! ${joke}`,
  },
  slide: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "m/s",
    label: "Your Slide Speed",
    unitSpace: true,
    template: (sender, value, joke) =>
      `${sender}, Your slide speed is ${value}m/s today! ${joke}`,
  },
  climb: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "m/s",
    label: "Your Climb Speed",
    unitSpace: true,
    template: (sender, value, joke) =>
      `${sender}, Your climbing speed is ${value}m/s today! ${joke}`,
  },
  punch: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "kg",
    label: "Your Punch Power",
    unitSpace: true,
    template: (sender, value, joke) =>
      `${sender}, Your punch power is ${value}kg today! ${joke}`,
  },
  block: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Your Block Strength",
    unitSpace: true,
    template: (sender, value, joke) =>
      `${sender}, Your blocking strength is ${value}% today! ${joke}`,
  },
  tackle: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "kg",
    label: "Your Tackle Force",
    unitSpace: true,
    template: (sender, value, joke) =>
      `${sender}, Your tackle force is ${value}kg today! ${joke}`,
  },
  throw: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Your Throw Accuracy",
    unitSpace: true,
    template: (sender, value, joke) =>
      `${sender}, Your throwing accuracy is ${value}% today! ${joke}`,
  },
  kickflip: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Your Kickflip Ability",
    unitSpace: true,
    template: (sender, value, joke) =>
      `${sender}, Your kickflip ability is ${value}% today! ${joke}`,
  },
  spin: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "rpm",
    label: "Your Spin Speed",
    unitSpace: true,
    template: (sender, value, joke) =>
      `${sender}, You're spinning at ${value}rpm today! ${joke}`,
  },
  uppercut: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "kg",
    label: "Your Uppercut Power",
    unitSpace: true,
    template: (sender, value, joke) =>
      `${sender}, Your uppercut power is ${value}kg today! ${joke}`,
  },
  grapple: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Your Grapple Strength",
    unitSpace: true,
    template: (sender, value, joke) =>
      `${sender}, Your grapple strength is ${value}% today! ${joke}`,
  },
};
export default actions;