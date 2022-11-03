import { getRandomInt } from "../get-random-int/get-random-int";

export const getRandomId = () => {
  const letters = "qwertyuiopasdfghjklzxcvbnm";

  const letters_large = letters.toUpperCase().split("");
  const letters_small = letters.split("");

  const password = [];

  for (let i = 0; i < 16; i++) {
    if (getRandomInt(0, 2) === 1) {
      if (getRandomInt(0, 2) === 1) {
        password.push(letters_large[getRandomInt(0, letters.length)]);
      } else {
        password.push(letters_small[getRandomInt(0, letters.length)]);
      }
    } else {
      password.push(getRandomInt(0, 9));
    }
  }

  return password.join("");
};
