import getResult from '../index2.js';
import getGCD from '../fn/get-gcd.js';

export default () => {
  const userTask = 'What is the result of the expression?';
  getResult(getGCD, userTask);
};
