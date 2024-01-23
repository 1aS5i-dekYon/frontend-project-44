import getResult from '../index.js';
import getEvenNum from '../fn/get-even.js';

export default () => {
  const userTask = 'Answer "yes" if the number is even, otherwise answer "no".';
  getResult(getEvenNum, userTask);
};
