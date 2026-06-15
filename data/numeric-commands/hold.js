const hold = {
  gold: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "coins",
    label: "Your Gold Pouch",
    unitSpace: true,
    template: (sender, value, joke) =>
      `${sender}, You're carrying ${value} coins today! ${joke}`,
  },
};
export default hold;