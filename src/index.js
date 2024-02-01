import readlineSync from 'readline-sync';

export default (gameFn, userTask) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);

  console.log(userTask);

  for (let i = 0; i < 3; i += 1) {
    const [task, resultOfGameFn] = gameFn();

    const userAnswer = (readlineSync.question(`Question: ${task}\nYour answer: `)).toLowerCase();

    if (userAnswer === resultOfGameFn) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${resultOfGameFn}'.`);
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
