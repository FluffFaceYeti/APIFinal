function getActionWord(type) {
  return type
    .replace("throwshoe", "Threw a shoe at")
    .replace("fliptable", "Flipped a table")
    .replace("highfive", "High-fived")
    .replace("love", "Sent love to")
    .replace("bonk", "Bonked")
    .replace("boop", "Booped")
    .replace("hug", "Hugged")
    .replace("kiss", "Kissed")
    .replace("pat", "Patted")
    .replace("slap", "Slapped")
    .replace("spank", "Spanked")
    .replace("keg", "Kegged");
}   

export default getActionWord;