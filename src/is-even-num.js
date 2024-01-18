import readlineSync from 'readline-sync';

export default () => {
  const randomNum = Math.floor(Math.random() * 100);

  let systemAnswer = false;
  const arrOfUserAnswers = [];
  const userAnswer = readlineSync.question(`Question: ${randomNum}\nYour answer: `);

  arrOfUserAnswers.push(userAnswer);

  if (randomNum % 2 === 0) {
    if (arrOfUserAnswers.at(-1) === 'yes') {
      systemAnswer = true;
    } else {
      console.log(`${arrOfUserAnswers.at(-1)} is wrong answer ;(. Correct answer was 'yes'.`);
    }
  }
  if (randomNum % 2 !== 0) {
    if (arrOfUserAnswers.at(-1) === 'no') {
      systemAnswer = true;
    } else {
      console.log(`${arrOfUserAnswers.at(-1)} is wrong answer ;(. Correct answer was 'no'.`);
    }
  }
  return systemAnswer;
};
