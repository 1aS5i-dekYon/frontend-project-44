import getResult from '../index.js';
import getRandom from '../utils.js';

const GCD = (x, y) => {
  if (y > x) return GCD(y, x);
  if (!y) return x;
  return GCD(y, x % y);
};

const getGCD = () => {
  const num1 = getRandom();
  const num2 = getRandom();
  const expression = `${num1} ${num2}`;

  const result = GCD(num1, num2);

  return [expression, result.toString()];
};

export default () => {
  const userTask = 'Find the greatest common divisor of given numbers.';
  getResult(getGCD, userTask);
};
