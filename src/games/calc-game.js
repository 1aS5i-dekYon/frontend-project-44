import getResult from '../index.js';

import welcomeUser from '../fn/welcome-brain-games.js';
import getRandomExpression from '../fn/random-expression.js';
import getResultOfExpression from '../fn/get-result-expression.js';

export default () => {
  const userName = welcomeUser();

  console.log('What is the result of the expression?');

  let isSuccess = `Congratulations, ${userName}!`;
  let isRight = true;

  for (let i = 0; i < 3 && isRight === true; i += 1) {
    const expression = getRandomExpression();
    const resultOfExpression = getResultOfExpression(expression);

    isRight = getResult(expression, resultOfExpression);
    if (isRight === false) {
      isSuccess = `Let's try again, ${userName}!`;
    }
  }
  console.log(isSuccess);
};
