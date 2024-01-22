import getResult from '../index2.js';
import getPrime from '../fn/get-prime.js';

export default () => {
  const userTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  getResult(getPrime, userTask);
};
