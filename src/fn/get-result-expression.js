export default () => {
  const randomExpression = [];
  const symbols = '+-*';
  const randomSymb = symbols.charAt(Math.random() * symbols.length);

  randomExpression.push(Math.floor(Math.random() * 20));
  randomExpression.push(randomSymb);
  randomExpression.push(Math.floor(Math.random() * 20));

  const operator = randomExpression[1];
  const num1 = randomExpression[0];
  const num2 = randomExpression[2];

  let resultOfExpression;
  if (operator === '+') {
    resultOfExpression = num1 + num2;
  } else if (operator === '-') {
    resultOfExpression = num1 - num2;
  } else {
    resultOfExpression = num1 * num2;
  }

  return [randomExpression, resultOfExpression];
};
