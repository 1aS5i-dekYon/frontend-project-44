export default (systemAnswer, userAnswer) => {
  let isRight = false;

  if (userAnswer === systemAnswer) {
    isRight = true;
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${systemAnswer}'.`);
  }

  return isRight;
};
