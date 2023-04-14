const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let count = 0;
  for(let i = 0; i < matrix.length; i++) {
    // console.log(countCats[i]);
    let point = '^^';
    for(let j = 0; j < matrix[i].length; j++) {
      if(matrix[i][j] === point) {
        count++;
      }
    }
  }
  return count;


}

module.exports = {
  countCats
};


// let countCats = [[0, 1, '^^'],[0, '^^', 2],['^^', 1, 2]];

// let count = 0;
// for(let i = 0; i < countCats.length; i++) {
//   // console.log(countCats[i]);
//   let point = '^^';
//   for(let j = 0; j < countCats[i].length; j++) {
//     if(countCats[i][j] === point) {
//       count++;
//     }
//   }
// }
// console.log(count)
