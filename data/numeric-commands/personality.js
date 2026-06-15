const personality = {
  clowning: {
    min: 0,
    max: 100,
    levels: [20, 50],
    unit: "%",
    label: "Your Clowning Around",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, you're ${value}% clown today! ${joke}`,
  },
  heroComplex: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Your Hero Complex",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, Your hero complex is ${value}% today! ${joke}`,
  },
  darkHumor: {
    min: 0,
    max: 100,
    levels: [10, 50],
    unit: "%",
    label: "Your Dark Humor",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, your humor is ${value}% darktoday!${joke}`,
  },
  whimsicality: {
    min: 0,
    max: 100,
    levels: [25, 65],
    unit: "%",
    label: "Your Whimsicality",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, you're feeling ${value}% whimsical today! ${joke}`,
  },
  ambition: {
    min: 0,
    max: 100,
    levels: [40, 80],
    unit: "%",
    label: "Your Ambition",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, your ambition is ${value}% today! ${joke}`,
  },
  mischief: {
    min: 0,
    max: 100,
    levels: [20, 60],
    unit: "%",
    label: "Your Mischief Level",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, You're up to ${value}% mischief today! ${joke}`,
  },
  bookishness: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Your Bookishness",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, You're ${value}% bookworm today! ${joke}`,
  },
  zen: {
    min: 0,
    max: 100,
    levels: [30, 80],
    unit: "%",
    label: "Your Zen",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, Your inner zen is ${value}% today! ${joke}`,
  },
  selfConfidence: {
    min: 0,
    max: 100,
    levels: [30, 80],
    unit: "%",
    label: "Your Self-Confidence",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, Your confidence level is ${value}% today! ${joke}`,
  },
  thoughtfulness: {
    min: 0,
    max: 100,
    levels: [40, 90],
    unit: "%",
    label: "Your Thoughtfulness",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, You're ${value}% thoughtful today! ${joke}`,
  },
  creativity: {
    min: 0,
    max: 100,
    levels: [10, 50],
    unit: "%",
    label: "Your Creativity",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, Your creativity is flowing at ${value}% today! ${joke}`,
  },
  spontaneity: {
    min: 0,
    max: 100,
    levels: [20, 70],
    unit: "%",
    label: "Your Spontaneity",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, You're feeling ${value}% spontaneous today! ${joke}`,
  },
  cookingSkills: {
    min: 0,
    max: 100,
    levels: [20, 60],
    unit: "%",
    label: "Your Cooking Skills",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, Your cooking skills are ${value}% today! ${joke}`,
  },
  competitiveSpirit: {
    min: 0,
    max: 100,
    levels: [40, 90],
    unit: "%",
    label: "Your Competitive Spirit",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, Your competitive spirit is ${value}% today! ${joke}`,
  },
  eccentricity: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Your Eccentricity",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, Your eccentricity is ${value}% today! ${joke}`,
  },
  sassiness: {
    min: 0,
    max: 100,
    levels: [40, 90],
    unit: "%",
    label: "Your Sassiness",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, Your feeling ${value}% sassy today! ${joke}`,
  },
  imagination: {
    min: 0,
    max: 100,
    levels: [20, 60],
    unit: "%",
    label: "Your Imagination",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, Your imagination is running at ${value}% today! ${joke}`,
  },
  nurturingInstinct: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Your Nurturing Instinct",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, Your nurturing instinct is ${value}% today! ${joke}`,
  },
  patience: {
    min: 0,
    max: 100,
    levels: [20, 50],
    unit: "%",
    label: "Your Patience",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, Your patience is ${value}% Today! ${joke}`,
  },
  charisma: {
    min: 0,
    max: 100,
    levels: [50, 90],
    unit: "%",
    label: "Your Charisma",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, Your charisma is ${value}% today! ${joke}`,
  },
  luck: {
    min: 1,
    max: 10,
    levels: [3, 7],
    unit: "/10",
    label: "Your Luck Roll",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, You rolled a luck score of ${value}/10 today! ${joke}`,
  },
  southernbelle: {
    min: 0,
    max: 100,
    levels: [30, 80],
    unit: "%",
    label: "Your Southern Twang",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, Your southern twang ${value}% today! ${joke}`,
  },
};
export default personality;