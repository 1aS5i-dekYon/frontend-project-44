import askQuestion from './fn/ask-question.js';
import isRightUserAnswer from './fn/is-right-user-answer.js';

export default (expression, resultOfExpression) => {
  const stringExpression = expression.join(' ');
  const userAnswer = askQuestion(stringExpression);
  const isRight = isRightUserAnswer(resultOfExpression, userAnswer);
  return isRight;
};
