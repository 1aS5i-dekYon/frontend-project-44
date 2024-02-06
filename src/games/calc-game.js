import getResult from '../index.js';
import getRandom from '../utils.js';

const calculate = (num1, operator, num2) => {
  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      throw new Error('am i joke to u?');
  }

  return result.toString();
};

const getCalc = () => {
  const symbols = ['+', '-', '*'];
  const operator = symbols[getRandom(3)];

  const num1 = getRandom(20);
  const num2 = getRandom(20);

  const expression = `${num1} ${operator} ${num2}`;

  return [expression, calculate(num1, operator, num2)];
};

export default () => {
  const userTask = 'What is the result of the expression?';
  getResult(getCalc, userTask);
};
