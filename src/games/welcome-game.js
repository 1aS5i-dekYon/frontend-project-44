import getUserName from '../cli.js';

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = getUserName();
  console.log(`Hello, ${name}!`);

  return name;
};
