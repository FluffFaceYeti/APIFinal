const piracy = {
  pirate: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Your Piracy Skill",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, You're ${value}% pirate today! ${joke}`,
  },
  captain: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Your Captain Skill",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, Your captain energy is ${value}% today! ${joke}`,
  },
  treasure_hunting: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Your Treasure Hunting",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, Your treasure hunting instincts are ${value}% today! ${joke}`,
  },
  sea_navigation: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Your Sea Navigation",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, Your navigation skills are ${value}% today! ${joke}`,
  },
  ship_maintenance: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Your Ship Maintenance",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, Your ship maintenance skills are ${value}% today! ${joke}`,
  },
  swordsmanship: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Your Swordsmanship",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, Your swordsmanship is ${value}% today! ${joke}`,
  },
  swashbuckling: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Your Swashbuckling",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, You're ${value}% swashbuckler today! ${joke}`,
  },
  plunder: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Your Plunder Efficiency",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, Your plundering efficiency is ${value}% today! ${joke}`,
  },
  cannon_use: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Your Cannon Use",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, Your cannon skills are ${value}% today! ${joke}`,
  },
  crew_morale: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Your Crew Morale",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, Your crew morale is ${value}% today! ${joke}`,
  },
  intimidation: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Your Intimidation Level",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, Your intimidation factor is ${value}% today! ${joke}`,
  },
  parley: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Your Parley Skill",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, Your parley skills are ${value}% today! ${joke}`,
  },
};
export default piracy;