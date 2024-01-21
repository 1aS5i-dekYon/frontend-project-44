import getResult from '../index2.js';
import getProgression from '../fn/get-progression.js';

export default () => {
  const userTask = 'What number is missing in the progression?';
  getResult(getProgression, userTask);
};
