const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let res = email.split('@')
  let length = res.length
  return email.split('@')[length - 1]
}

module.exports = {
  getEmailDomain
};



// let test  = 'prettyandsimple@example.com'

// let res = test.split('@')
// let length = res.length
// console.log(res[length - 1]);