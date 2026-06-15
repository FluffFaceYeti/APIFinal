import stats from "../stats.js";
import piracy from "../piracy.js";
import actions from "../actions.js";
import carry from "../carry.js";
import emotions from "../emotions.js";
import gym from "../gym.js";
import hate from "../hate.js";
import love from "../love.js";
import hold from "../hold.js";
import personality from "../personality.js";
import seaofthieves from "../seaofthieves.js";
import skills from "../skills.js";

const numericGroups = [
      { map: seaofthieves, category: "seaofthieves" },
      { map: stats, category: "stats" },
      { map: gym, category: "gym" },
      { map: love, category: "love" },
      { map: hate, category: "hate" },
      { map: personality, category: "personality" },
      { map: emotions, category: "emotions" },
      { map: skills, category: "skills" },
      { map: actions, category: "actions" },
      { map: hold, category: "hold" },
      { map: carry, category: "carry" },
      { map: piracy, category: "piracy" },
    ];
    export default numericGroups;
