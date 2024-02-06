import getResult from '../index.js';
import getRandom from '../utils.js';

const progressionWzEmptySpace = (amountOfNums, step) => {
  const progression = [];

  let num = getRandom(10);

  progression.push(num);
  for (let i = 0; i < amountOfNums; i += 1) {
    progression.push(num += step);
  }

  const randomEmptySpace = getRandom(amountOfNums);
  const emptyPlace = progression[randomEmptySpace];
  progression[randomEmptySpace] = '..';

  return [progression.join(' '), `${emptyPlace}`];
};

const getProgression = () => {
  const amountOfNums = getRandom(10, 5);
  const step = getRandom(15, 1);
  console.log(amountOfNums);
  console.log(step);

  return progressionWzEmptySpace(amountOfNums, step);
};

export default () => {
  const userTask = 'What number is missing in the progression?';
  getResult(getProgression, userTask);
};
