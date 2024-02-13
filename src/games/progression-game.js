import getResult from '../index.js';
import getRandom from '../utils.js';

const getProgression = (amountOfNums, step) => {
  const result = [];
  let num = getRandom(10);

  result.push(num);
  for (let i = 0; i < amountOfNums; i += 1) {
    result.push(num += step);
  }
  return result;
};

const makeProgressionWzEmptyPlace = () => {
  const amountOfNums = getRandom(10, 5);
  const step = getRandom(15, 1);

  const progression = getProgression(amountOfNums, step);

  const randomEmptySpace = getRandom(amountOfNums);
  const emptyPlace = progression[randomEmptySpace];
  progression[randomEmptySpace] = '..';

  return [progression.join(' '), emptyPlace.toString()];
};

export default () => {
  const userTask = 'What number is missing in the progression?';
  getResult(makeProgressionWzEmptyPlace, userTask);
};
