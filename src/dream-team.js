const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here


  if(!members) {
    return false;
  }

  let res = '';
  for(let i = 0; i < members.length; i++) {

    if(typeof members[i] === 'string'){
      res += members[i].trim()[0];
    }
    // console.log(res.split('').sort().join(''));
  }
  return res.toUpperCase().split('').sort().join('')
}

module.exports = {
  createDreamTeam
};



// let test  = ['B', 'E', 'T', 'D', 'V']
// let res = '';
// for(let i = 0; i < test.length; i++) {

//   if(typeof test[i] === 'string'){
//     // console.log(test[i]);
//     // console.log(test[i].trim());
//     // console.log(test[i].trim()[0])
//     res += test[i][0];
//   } else {}
// }
// console.log(res.split('').sort().join('').toUpperCase());