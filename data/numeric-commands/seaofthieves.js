const seaofthieves = {
  chainshot: {
    min: 0,
    max: 100,
    levels: [30, 70],
    label: "Chain Shot Accuracy",
    unit: "%",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, Your chainshot accuracy is ${value}% today! ${joke}`,
  },
  sniper: {
    min: 0,
    max: 100,
    levels: [30, 70],
    label: "Eye of Reach Accuracy",
    unit: "%",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, Your Eye of Reach accuracy is ${value}% today! ${joke}`,
  },
  swordlord: {
    min: 0,
    max: 100,
    levels: [30, 70],
    label: "Sword Lord Level",
    unit: "%",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, You're ${value}% sword lord today!${joke}`,
  },
  lunge: {
    min: 0,
    max: 100,
    levels: [30, 70],
    label: "Sword Lunge Skill",
    unit: "%",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, Your sword lunge skills are ${value}% today! ${joke}`,
  },
  tuck: {
    min: 0,
    max: 100,
    levels: [30, 70],
    label: "Tuck Skill",
    unit: "%",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, Your tucking skills are ${value}% today! ${joke}`,
  },
  gh: {
    min: 1,
    max: 75,
    levels: [20, 50],
    label: "Gold Hoarders Reputation Level",
    unit: "Lvls",
    unitSpace: true,
    template: (sender, value, joke) =>
      `${sender}, Your Gold Hoarders reputation is level ${value} today! ${joke}`,
  },
  oos: {
    min: 1,
    max: 75,
    levels: [20, 50],
    label: "Order of Souls Reputation Level",
    unit: "Lvls",
    unitSpace: true,
    template: (sender, value, joke) =>
      `${sender}, Your Order of Souls reputation is level ${value} today! ${joke}`,
  },
  ma: {
    min: 1,
    max: 75,
    levels: [20, 50],
    label: "Merchant Alliance Reputation Level",
    unit: "Lvls",
    unitSpace: true,
    template: (sender, value, joke) =>
      `${sender}, Your Merchant Alliance reputation is level ${value} today! ${joke}`,
  },
  athena: {
    min: 1,
    max: 75,
    levels: [20, 50],
    label: "Athena’s Fortune Reputation Level",
    unit: "Lvls",
    unitSpace: true,
    template: (sender, value, joke) =>
      `${sender}, Your Athena's Fortune reputation is level ${value} today! ${joke}`,
  },
  reaper: {
    min: 1,
    max: 75,
    levels: [20, 50],
    label: "Reaper’s Bones Reputation Level",
    unit: "Lvls",
    unitSpace: true,
    template: (sender, value, joke) =>
      `${sender}, Your Reaper's Bones reputation is level ${value} today! ${joke}`,
  },
  hunter: {
    min: 1,
    max: 75,
    levels: [20, 50],
    label: "Hunter’s Call Reputation Level",
    unit: "Pts",
    unitSpace: true,
    template: (sender, value, joke) =>
      `${sender}, Your Hunter's Call reputation is ${value} points today! ${joke}`,
  },
};
export default seaofthieves;