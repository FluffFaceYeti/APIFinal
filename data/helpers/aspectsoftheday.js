const aspectsOfTheDay = {
  daddy: {},
  pp: {},
  bb: {},
  princess: {},
  goodgirl: {},
  catmom: {},
  stinker: {},
  pirate: {},
  captain: {},
  animal: {},
  drink: {},
};

const aspectsOfTheDayTriggers = {
  pp: 15,
  daddy: 100,
  princess: 100,
  goodgirl: 100,
  catmom: 100,
  stinker: 100,
  pirate: 100,
  captain: 100,
};

const listAspectTriggers = {
  drink: {
    includes: "🍸 martini",
  },
  animal: {
    includes: "unicorn",
  },
};

const aspectOfTheDayAliases = {
  dadofday: "daddy",
  princessofday: "princess",
  goodgirlofday: "goodgirl",
  catmomofday: "catmom",
  stinkerofday: "stinker",
  pirateofday: "pirate",
  captainofday: "captain",
  animalofday: "animal",
  drinkofday: "drink",
  drinkoofday: "drink",
  ppofday: "pp",
};

const aspectOfTheDayNoWinnerMessages = {
  daddy: "There is no Daddy of the Day yet!",
  pp: "There is no PP of the Day yet!",
  princess: "There is no Princess of the Day yet!",
  goodgirl: "There is no Good Girl of the Day yet!",
  catmom: "There is no Cat Mom of the Day yet!",
  stinker: "There is no Stinker of the Day yet!",
  pirate:
    "☠️ There be no Pirate of the Day yet! Raise yer sails and earn yer title, ye scallywag! 🦜",
  captain: "There be no Captain of the Day yet! Who will seize the helm? 🏴‍☠️",
  animal: "🐾 There is no Animal of the Day yet! Be the first to roar! 🦁",
  drink: "🍹 There is no Drink of the Day yet! Be the first to sip! 🍸",
};

export { aspectsOfTheDay, aspectsOfTheDayTriggers, listAspectTriggers, aspectOfTheDayAliases, aspectOfTheDayNoWinnerMessages};