import welcomeUser from './fn/welcome-brain-games.js';
import askQuestion from './fn/ask-question.js';
import isRightUserAnswer from './fn/is-right-user-answer.js';

export default (gameFn, userTask) => {
  const userName = welcomeUser();
  console.log(userTask);

  let isSuccess = `Congratulations, ${userName}!`;
  let isRight = true;

  for (let i = 0; i < 3 && isRight === true; i += 1) {
    const taskAndResult = gameFn();

    const stringTask = taskAndResult[0].join(' ');
    const result = taskAndResult[1].toString();
    const userAnswer = askQuestion(stringTask);

    isRight = isRightUserAnswer(result, userAnswer);

    if (isRight === false) {
      isSuccess = `Let's try again, ${userName}!`;
    }
  }
  console.log(isSuccess);
};
