export default () => {
  const randomNum = Math.floor(Math.random() * 38);

  let resultPrime = 'yes';
  for (let i = 2; i < randomNum; i += 1) {
    if (randomNum % i === 0) resultPrime = 'no';
  }

  return [[randomNum], resultPrime];
};
