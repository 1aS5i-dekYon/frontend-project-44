import getResult from '../index.js';
import getGCD from '../fn/get-gcd.js';

export default () => {
  const userTask = 'Find the greatest common divisor of given numbers.';
  getResult(getGCD, userTask);
};
