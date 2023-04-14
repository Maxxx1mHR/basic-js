const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  const newArr = new Set(arr)

  const discardNext = newArr.indexOf('--discard-next');
  const discardPrev = newArr.indexOf('--discard-prev');
  const doubleNext = newArr.indexOf('--double-next');
  const doublePrev = newArr.indexOf('--double-prev');

  for (let i = 0; i < newArr.length; i++) {
    if(newArr[i] === discardNext) {
      newArr.splice(discardNext, 2);
    }
    if(newArr[i] === discardPrev) {
      newArr.splice(discardPrev - 1, 2);
    }
    if(newArr[i] === doubleNext) {
      newArr.splice(doubleNext, 1, newArr[doubleNext + 1]);
    }

    if(newArr[i] === doublePrev) {
      newArr.splice(doublePrev, 1, newArr[doublePrev - 1]);
    }

  }


}

module.exports = {
  transform
};




// let test = [1, 2, 3, '--double-next', 4, 5, '--discard-prev'];

// // const discardNext = test.indexOf('--discard-next');
// // const discardPrev = test.indexOf('--discard-prev');
// // const doubleNext = test.indexOf('--double-next');
// // const doublePrev = test.indexOf('--double-prev');

// for (let i = 0; i < test.length; i++) {

// const discardNext = test.indexOf('--discard-next');
// const discardPrev = test.indexOf('--discard-prev');
// const doubleNext = test.indexOf('--double-next');
// const doublePrev = test.indexOf('--double-prev');
//   if(test[i] === discardNext) {
//     test.splice(discardNext, 2);
//   } else if(test[i] === discardPrev) {
//     test.splice(discardPrev - 1, 2);
//   } else if(test[i] === doubleNext) {
//     test.splice(doubleNext, 1, test[doubleNext + 1]);
//   } else if(test[i] === doublePrev) {
//     test.splice(doublePrev, 1, test[doublePrev - 1]);
//   }

// }

// console.log(test);