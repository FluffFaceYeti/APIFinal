const carry = {
  weight: {
    min: 0,
    max: 200,
    levels: [50, 150],
    unit: "kg",
    label: "Your Carry Weight",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, Your carry weight is ${value}kg today! ${joke}`,
  },
  items: {
    min: 0,
    max: 100,
    levels: [10, 50],
    unit: "items",
    label: "Your Carry Items",
    unitSpace: true,
    template: (sender, value, joke) =>
      `${sender}, You're carrying ${value} items today! ${joke}`,
  },
};
export default carry;