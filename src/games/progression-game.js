import getResult from '../index.js';

const getProgression = () => {
  const progression = [];

  let num = Math.floor(Math.random() * 10);

  let amountOfNums = Math.floor(Math.random() * 10);
  if (amountOfNums < 5) amountOfNums = 5;

  const step = 1 + Math.floor(Math.random() * 15);

  progression.push(num);
  for (let i = 0; i < amountOfNums; i += 1) {
    progression.push(num += step);
  }

  const randomEmptySpace = Math.floor(Math.random() * amountOfNums);
  const emptyPlace = progression[randomEmptySpace];
  progression[randomEmptySpace] = '..';

  return [progression, emptyPlace];
};

export default () => {
  const userTask = 'What number is missing in the progression?';
  getResult(getProgression, userTask);
};
