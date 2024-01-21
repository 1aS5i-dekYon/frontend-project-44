export default (expression) => {
  let resultOfExpression;
  const operator = expression[1];
  const num1 = expression[0];
  const num2 = expression[2];

  if (operator === '+') {
    resultOfExpression = num1 + num2;
  } else if (operator === '-') {
    resultOfExpression = num1 - num2;
  } else {
    resultOfExpression = num1 * num2;
  }

  return resultOfExpression.toString();
};
