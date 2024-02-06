import getResult from '../index.js';
import getRandom from '../utils.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const getPrime = () => {
  const num = getRandom(38);

  const result = (isPrime(num)) ? 'yes' : 'no';

  return [`${num}`, `${result}`];
};

export default () => {
  const userTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  getResult(getPrime, userTask);
};
