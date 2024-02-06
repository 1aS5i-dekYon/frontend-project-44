export default (max = 100, min = 0) => {
  const num = (Math.floor(Math.random() * (max - min) + min));
  return num;
};
