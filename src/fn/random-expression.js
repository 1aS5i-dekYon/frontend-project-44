export default () => {
  const randomExpression = [];
  const symbols = '+-*';
  const randomSymb = symbols.charAt(Math.random() * symbols.length);

  randomExpression.push(Math.floor(Math.random() * 20));
  randomExpression.push(randomSymb);
  randomExpression.push(Math.floor(Math.random() * 20));

  return randomExpression;
};
