const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

class DepthCalculator {

  calculateDepth(arr) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let count = 0
    if(Array.isArray(arr)){
      count++
    }
    for(let i = 0; i < arr.length; i++) {
      if(Array.isArray(arr[i])){
        arr = arr.flat()
        count += this.calculateDepth(arr)
        return count
      }
    }
    return count
  }
}

module.exports = {
  DepthCalculator
};


// let test = [[1]]
// // console.log(test.flat())
// let count = 0


// function getDepth(array) {
//   if(Array.isArray(array)){
//     count++
//   }
//   for(let i = 0; i < array.length; i++) {
//     if(Array.isArray(array[i])){
//       getDepth(array.flat())
//     }
//   }
//   return count
// }

// console.log(getDepth(test));



