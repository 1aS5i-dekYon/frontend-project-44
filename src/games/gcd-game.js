import getResult from '../index.js';

const GCD = (x, y) => {
  if (y > x) return GCD(y, x);
  if (!y) return x;
  return GCD(y, x % y);
};

const getGCD = () => {
  const randomNumsForGcd = [];

  randomNumsForGcd.push(Math.floor(Math.random() * 100));
  randomNumsForGcd.push(Math.floor(Math.random() * 100));

  const resultGcd = GCD(randomNumsForGcd[0], randomNumsForGcd[1]);

  const numsWzJoin = randomNumsForGcd.join(' ');
  const resultInString = resultGcd.toString();

  return [numsWzJoin, resultInString];
};

export default () => {
  const userTask = 'Find the greatest common divisor of given numbers.';
  getResult(getGCD, userTask);
};
