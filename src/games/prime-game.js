import getResult from '../index.js';

const getPrime = () => {
  const randomNum = Math.floor(Math.random() * 38);

  let resultPrime = 'yes';
  for (let i = 2; i < randomNum; i += 1) {
    if (randomNum % i === 0) resultPrime = 'no';
  }

  return [[randomNum], resultPrime];
};

export default () => {
  const userTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  getResult(getPrime, userTask);
};
