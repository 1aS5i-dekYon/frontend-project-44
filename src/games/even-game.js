import getResult from '../index.js';

const getEvenNum = () => {
  const randomNum = Math.floor(Math.random() * 100);

  const resultPrime = (randomNum % 2) ? 'no' : 'yes';

  return [[randomNum], resultPrime];
};

export default () => {
  const userTask = 'Answer "yes" if the number is even, otherwise answer "no".';
  getResult(getEvenNum, userTask);
};
