const skills = {
  precision: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Your Precision",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, Your precision is ${value}% today! ${joke}`,
  },
  accuracy: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Your Accuracy",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, Your accuracy is ${value}% today! ${joke}`,
  },
  focus: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Your Focus Level",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, Your focus level is ${value}% today! ${joke}`,
  },
  flirting: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Your Flirting Skill",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, Your flirting skills are ${value}% today! ${joke}`,
  },
  dj: {
    min: 1,
    max: 10,
    levels: [3, 7],
    unit: "/10",
    label: "Your DJ Skill Level",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, Your DJ skills are ${value}/10 today! ${joke}`,
  },
  intelligence: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Your Intelligence",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, Your intelligence is ${value}% today! ${joke}`,
  },
  stealth: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Your Stealth",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, Your stealth is ${value}% today! ${joke}`,
  },
  cooking: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Your Cooking Skill",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, Your cooking skills are ${value}% today! ${joke}`,
  },
  leadership: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Your Leadership Ability",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, Your leadership ability is ${value}% today! ${joke}`,
  },
  negotiation: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Your Negotiation Skill",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, Your negotiation skills are ${value}% today! ${joke}`,
  },
  martial_arts: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Your Martial Arts Skill",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, Your martial arts skills are ${value}% today! ${joke}`,
  },
  strength: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Your Strength",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, Your strength is ${value}% today! ${joke}`,
  },
  adaptability: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Your Adaptability",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, Your adaptability is ${value}% today! ${joke}`,
  },
};
export default skills;