import getResult from '../index.js';
import getCalc from '../fn/get-result-expression.js';

export default () => {
  const userTask = 'What is the result of the expression?';
  getResult(getCalc, userTask);
};
