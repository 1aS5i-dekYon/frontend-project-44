import readlineSync from 'readline-sync';
import getUserName from './cli.js';

export default (gameFn, userTask) => {
  console.log('Welcome to the Brain Games!');
  const userName = getUserName();
  console.log(`Hello, ${userName}!`);

  console.log(userTask);

  for (let i = 0; i < 3; i += 1) {
    const [task, resultOfGameFn] = gameFn();

    const stringTask = task.join(' ');
    const result = resultOfGameFn.toString();
    const userAnswer = (readlineSync.question(`Question: ${stringTask}\nYour answer: `)).toLowerCase();

    if (userAnswer === result) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'.`);
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
