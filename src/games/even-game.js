import getResult from '../index.js';
import getRandom from '../utils.js';

const isEven = (num) => !(num % 2);

const getEvenNum = () => {
  const num = getRandom();

  const result = isEven(num) ? 'yes' : 'no';

  return [num.toString(), result];
};

export default () => {
  const userTask = 'Answer "yes" if the number is even, otherwise answer "no".';
  getResult(getEvenNum, userTask);
};
