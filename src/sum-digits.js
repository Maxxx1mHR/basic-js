const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
// let res = 0;
function getSumOfDigits(n) {
  let res = 0;
  for(let i = 0; i < n.toString().length; i++) {
    res += +n.toString().split('')[i]
  }
  if(res >= 10) {
    n = res
    res = 0
    res += getSumOfDigits(n);
  }
  return res
}

module.exports = {
  getSumOfDigits
};



// let digit = 91
// let res = 0;
// function getSumOfDigits(n) {
//   for(let i = 0; i < n.toString().length; i++) {
//     res += +n.toString().split('')[i]
//     if(i === n.toString().length - 1) {
//       n = res
//       if (n > 9) {
//         res = 0
//         getSumOfDigits(n)
//         return res
//       }
//     }
//   }
//   return res
// }

// console.log(getSumOfDigits(digit));



// let digit = 123

// function getSumOfDigits(n) {
//   let res = 0;
//   for(let i = 0; i < n.toString().length; i++) {
//     res += +n.toString().split('')[i]
//   }
//   if(res >= 10) {
//     n = res
//     res = 0
//     res += getSumOfDigits(n);
//   }
//   return res
// }

// console.log(getSumOfDigits(digit));




