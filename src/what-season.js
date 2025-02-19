const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if(!date) {
    return 'Unable to determine the time of year!'
  }

  try {
    date.getTime();
  } catch (e) {
    throw new Error('Invalid date!');
  }

  const month = date.getMonth();
  if (month === 0 || month === 1 || month === 11) {
    return `winter`
  } else if (month === 2 || month === 3 || month === 4) {
    return 'spring'
  } else if (month === 5 || month === 6 || month === 7) {
    return `summer`
  } else if (month === 8 || month === 9 || month === 10) {
    return `autumn`
  }
}

module.exports = {
  getSeason
};


// const springDate = new Date(1940, 01, 31)
// console.log(springDate.getMonth());



// // console.log(springDate.getMonth());
// const month = springDate.getMonth();

// if (month <= 2) {
//   console.log('winter');
//   return `winter`
// } else if (month > 2 && month <= 5) {
//   return 'spring'
// } else if (month > 5 && month <= 8) {
//   return `summer`
// } else if (month > 8 && month < 11) {
//   return `autumn`
// }