import getResult from '../index.js';
import getRandom from '../utils.js';

const calculate = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error('am i joke to u?');
  }
};

const getCalc = () => {
  const symbols = ['+', '-', '*'];
  const operator = symbols[getRandom(symbols.length)];

  const num1 = getRandom(20);
  const num2 = getRandom(20);

  const expression = `${num1} ${operator} ${num2}`;

  return [expression, calculate(num1, operator, num2).toString()];
};

export default () => {
  const userTask = 'What is the result of the expression?';
  getResult(getCalc, userTask);
};
