import getResult from '../index.js';
import getRandom from '../utils.js';

const isEven = (num) => {
  if (num % 2 === 0) return true;
  return false;
};

const getEvenNum = () => {
  const num = getRandom();

  const result = (isEven(num)) ? 'yes' : 'no';

  return [`${num}`, `${result}`];
};

export default () => {
  const userTask = 'Answer "yes" if the number is even, otherwise answer "no".';
  getResult(getEvenNum, userTask);
};
