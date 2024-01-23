import getResult from '../index.js';
import getPrime from '../fn/get-prime.js';

export default () => {
  const userTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  getResult(getPrime, userTask);
};
