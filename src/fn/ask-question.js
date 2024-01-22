import readlineSync from 'readline-sync';

export default (stringExpression) => {
  const userAnswer = readlineSync.question(`Question: ${stringExpression}\nYour answer: `);

  return userAnswer.toLowerCase();
};
