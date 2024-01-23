export default () => {
  const randomNum = Math.floor(Math.random() * 100);

  let resultPrime = 'yes';
  if (randomNum % 2 !== 0) resultPrime = 'no';

  return [[randomNum], resultPrime];
};
