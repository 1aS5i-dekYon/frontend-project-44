import getResult from '../index.js';

const calculate = (expression) => {
  const [num1, operator, num2] = expression;

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
      throw new Error('am i joke to u?');
  }

  const expressionWzJoin = expression.join(' ');
  const resultInString = resultOfExpression.toString();

  return [expressionWzJoin, resultInString];
};

const getCalc = () => {
  const randomExpression = [];
  const symbols = ['+', '-', '*'];
  const randomSymb = symbols[Math.floor(Math.random() * symbols.length)];

  randomExpression.push(Math.floor(Math.random() * 20));
  randomExpression.push(randomSymb);
  randomExpression.push(Math.floor(Math.random() * 20));

  return calculate(randomExpression);
};

export default () => {
  const userTask = 'What is the result of the expression?';
  getResult(getCalc, userTask);
};
