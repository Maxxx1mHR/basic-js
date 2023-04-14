const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // const splitN = n.toString().split('');
  // const minN = Math.min.apply(Math,splitN).toString();
  // const itemDelet = splitN.indexOf(minN)
  // splitN.splice(itemDelet, 1)
  // return +splitN.join('')

  let arr = [];
  for(let i = 0; i < n.toString().length; i++) {
    // console.log(n.toString()[i]);
    let tmp = n.toString().replace(n.toString()[i],'')
    // console.log(tmp)
    arr.push(tmp)
  }
  return Math.max(...arr)





}


module.exports = {
  deleteDigit
};


// const n = 342;
// const splitN = n.toString().split('');
// const minN = Math.min.apply(Math,splitN).toString();
// const itemDelet = splitN.indexOf(minN)
// // console.log(splitN);
// // console.log(minN);
// // console.log(splitN.indexOf(minN));
// console.log(splitN.splice(itemDelet, 1));
// console.log(+splitN.join(''));


// const n = 342
// console.log(n.toString().replace(3,''));
// let arr = [];
// const splitN = n.toString().split('');
// console.log(n.toString().replace(3, ''));
// for(let i = 0; i < splitN.toString().length; i++) {
//   arr[i].push(splitN.splice(i,1));
// }
// console.log(arr);



// const n = 342
// let arr = [];
// for(let i = 0; i < n.toString().length; i++) {
//   console.log(n.toString()[i]);
//   let tmp = n.toString().replace(n.toString()[i],'')
//   console.log(tmp)
//   arr.push(+tmp)
// }
// console.log(Math.max(...arr))

