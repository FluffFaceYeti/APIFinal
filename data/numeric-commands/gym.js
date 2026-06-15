const gym = {
  lift: {
    min: 0,
    max: 500,
    levels: [100, 300],
    unit: "kg",
    label: "Your Lifting Power",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, You're lifting ${value}kg today! ${joke}`,
  },
  run: {
    min: 0,
    max: 42,
    levels: [10, 25],
    unit: "km",
    label: "Your Running Distance",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, You've got ${value}km in your legs today! ${joke}`,
  },
  sprint: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "m/s",
    label: "Your Sprint Speed",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, Your sprint speed is ${value}m/s today! ${joke}`,
  },
  deadlift: {
    min: 0,
    max: 500,
    levels: [100, 300],
    unit: "kg",
    label: "Your Deadlift Strength",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, Your deadlifting ${value}kg today! ${joke}`,
  },
  curl: {
    min: 0,
    max: 200,
    levels: [20, 80],
    unit: "kg",
    label: "Your Curl Strength",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, You're curling ${value}kg today! ${joke}`,
  },
  row: {
    min: 0,
    max: 1000,
    levels: [100, 500],
    unit: "m",
    label: "Your Rowing Distance",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, You rowed ${value}m today! ${joke}`,
  },
  stretch: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Your Flexibility",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, Your flexibility is ${value}% today! ${joke}`,
  },
};
export default gym;