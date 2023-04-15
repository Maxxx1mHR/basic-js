const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let countSteps = Math.pow(2, disksNumber) - 1
  let time = 3600 / turnsSpeed
  return {turns: countSteps, seconds: Math.floor(countSteps * time)}
}

module.exports = {
  calculateHanoi
};



//2^n - 1
// let n = 9
// let diskNumber = 4308
// let countSteps = Math.pow(2, n) - 1
// let seconds = 3600 / diskNumber
// console.log(Math.floor(countSteps * seconds));