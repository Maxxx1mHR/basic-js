const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let {repeatTimes, separator = '+', addition = '', additionRepeatTimes = '', additionSeparator = '|'} = options
  // console.log(repeatTimes, separator, addition, additionRepeatTimes, additionSeparator)
  let part1 = ''
  part1 += `${str}${addition}`

  let part2 = ''
  for (let i = 0; i < additionRepeatTimes - 1; i++) {
    part2 += `${additionSeparator}${addition}`
  }

  let part1Andpar2 = part1 + part2;

  let part3 = ''

  for(let i = 0; i < repeatTimes - 1; i++) {
    part3 += `${separator}${part1Andpar2}`
  }

  let res = part1Andpar2 + part3;

  return res
}

module.exports = {
  repeater
};




// let str = 'la'
// // let options = { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' }
// let options = { repeatTimes: 3}
// // 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
// function repeater(str, options)  {
//   let {repeatTimes, separator = '+', addition = '', additionRepeatTimes = '', additionSeparator = '|'} = options
//   // console.log(repeatTimes, separator, addition, additionRepeatTimes, additionSeparator)
//   let part1 = ''
//   part1 += `${str}${addition}`

//   let part2 = ''
//   for (let i = 0; i < additionRepeatTimes - 1; i++) {
//     part2 += `${additionSeparator}${addition}`
//   }

//   let part1Andpar2 = part1 + part2;

//   let part3 = ''

//   for(let i = 0; i < repeatTimes - 1; i++) {
//     part3 += `${separator}${part1Andpar2}`
//   }

//   let res = part1Andpar2 + part3;

//   return res

//   // console.log(part1)
//   // console.log(part2)
//   // console.log(part1Andpar2);
//   // console.log(part3);
// }
// console.log(repeater(str,options))