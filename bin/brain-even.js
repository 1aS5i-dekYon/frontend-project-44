#!/usr/bin/env node
import getUserName from '../src/cli.js';
import isEvenNum from '../src/is-even-num.js';

const userName = [];
const isRigth = true;

console.log('Welcome to the Brain Games!');
userName.push(getUserName());
console.log(`Hello, ${userName.at(-1)}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let isSuccess = `Congratulations, ${userName.at(-1)}!`;

for (let i = 0; i < 3; i += 1) {
  if (isRigth === isEvenNum()) {
    console.log('Correct!');
  } else {
    isSuccess = `Let's try again, ${userName.at(-1)}!`;
    break;
  }
}
console.log(isSuccess);
