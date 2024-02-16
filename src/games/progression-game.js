import getResult from '../index.js';
import getRandom from '../utils.js';

const makeProgression = (amountOfNums, step) => {
  let num = getRandom(10);
  const result = [num];

  for (let i = 0; i < amountOfNums; i += 1) {
    result.push(num += step);
  }
  return result;
};

const getProgression = () => {
  const amountOfNums = getRandom(10, 5);
  const step = getRandom(15, 1);

  const progression = makeProgression(amountOfNums, step);

  const emptySpace = getRandom(amountOfNums);
  const emptyPlace = progression[emptySpace];
  progression[emptySpace] = '..';

  return [progression.join(' '), emptyPlace.toString()];
};

export default () => {
  const userTask = 'What number is missing in the progression?';
  getResult(getProgression, userTask);
};
