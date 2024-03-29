import readlineSync from 'readline-sync';

import hi from '../cli.js';

import { getRandomIntInclusive, areUserRight, gcd } from '../util.js';

const makeNod = () => {
  const name = hi();
  const number = 3;
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < number; i += 1) {
    const NumberFirst = getRandomIntInclusive(1, 100);
    const NumberSecond = getRandomIntInclusive(1, 100);
    console.log(`Question: ${NumberFirst} ${NumberSecond}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = gcd(NumberFirst, NumberSecond);
    const right = areUserRight(yourAnswer, correctAnswer, name);
    if (!right) {
      return null;
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default makeNod;
