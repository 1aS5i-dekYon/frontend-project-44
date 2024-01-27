import getResult from '../index.js';

const getGCD = () => {
  const randomNumsForGcd = [];

  randomNumsForGcd.push(Math.floor(Math.random() * 100));
  randomNumsForGcd.push(Math.floor(Math.random() * 100));
  const GCD = (x, y) => {
    if (y > x) return GCD(y, x);
    if (!y) return x;
    return GCD(y, x % y);
  };

  const resultGcd = GCD(randomNumsForGcd[0], randomNumsForGcd[1]);
  return [randomNumsForGcd, resultGcd];
};

export default () => {
  const userTask = 'Find the greatest common divisor of given numbers.';
  getResult(getGCD, userTask);
};
