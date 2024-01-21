import getUserName from './cli.js';

export default () => {
  const name = [];

  console.log('Welcome to the Brain Games!');
  name.push(getUserName());
  console.log(`Hello, ${name.at(-1)}!`);

  return name.at(-1);
};
