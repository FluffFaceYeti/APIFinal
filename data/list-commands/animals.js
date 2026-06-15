const animal = {
  animal: {
    list: [
      " Lion",
      " Tiger",
      " Bear",
      " Dog",
      " Cat",
      " Fox",
      " Panda",
      " Koala",
      " Frog",
      " Monkey",
      " Unicorn",
      " Snake",
      " Eagle",
      " Wolf",
      " Turtle",
    ],
    label: "animal spirit",
    template: (sender, chosen, joke) =>
    `${sender}, your animal spirit is ${chosen}! ${joke}`,
  },
};
export default animal;