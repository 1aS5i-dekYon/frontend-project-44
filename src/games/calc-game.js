import getResult from '../index.js';

const getCalc = () => {
  const randomExpression = [];
  const symbols = ['+', '-', '*'];
  const randomSymb = symbols[Math.floor(Math.random() * symbols.length)];

  randomExpression.push(Math.floor(Math.random() * 20));
  randomExpression.push(randomSymb);
  randomExpression.push(Math.floor(Math.random() * 20));

  const operator = randomExpression[1];
  const num1 = randomExpression[0];
  const num2 = randomExpression[2];

  let resultOfExpression;
  switch (operator) {
    case '+':
      resultOfExpression = num1 + num2;
      break;
    case '-':
      resultOfExpression = num1 - num2;
      break;
    case '*':
      resultOfExpression = num1 * num2;
      break;
    default:
  }

  return [randomExpression, resultOfExpression];
};

export default () => {
  const userTask = 'What is the result of the expression?';
  getResult(getCalc, userTask);
};
