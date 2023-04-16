const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
 const chainMaker = {
  str: [],
  getLength() {
    return this.str.length
  },
  addLink(value) {
      // this.str.push(String(value))
      this.str.push(String(`( ${value} )`))
      return this
  },
  removeLink(position) {
    if (position < 1 || position > this.str.length || typeof position !== 'number') {
      this.str = []
      throw new Error(`You can't remove incorrect link!`)
    } else {
      this.str.splice(position - 1, 1)
      return this
    }
  },
  reverseChain() {
    this.str.reverse()
    return this
  },
  finishChain() {
    // let res = this.str.join().replace(/,/,'~~')
    // this.str = []
    // return res
    let res = this.str.join().replace(/,/g,'~~')
    this.str = []
    return res
  }
};

module.exports = {
  chainMaker
};



// const chainMaker = {
//   str: [],
//   getLength() {
//     return this.str.length
//   },
//   addLink(value) {
//       this.str.push(String(`(${value})`))
//       return this
//   },
//   removeLink(position) {
//     if (position < 1 || position > this.str.length || typeof position !== 'number') {
//       this.str = []
//       throw new Error(`You can't remove incorrect link!`)
//     } else {
//       this.str.splice(position - 1, 1)
//       return this
//     }
//   },
//   reverseChain() {
//     this.str.reverse()
//     return this
//   },
//   finishChain() {
//     let res = this.str.join().replace(/,/g,'~~')
//     this.str = []
//     return res
//   }
// };

// chainMaker.addLink('123');

// chainMaker.addLink(Infinity);
// chainMaker.addLink(Infinity);

// // // console.log(chainMaker.str.join().replace(/,/,'~~'));
// // console.log(chainMaker.str);
// // // console.log(chainMaker.removeLink(0));
// // // chainMaker.reverseChain()
// console.log(chainMaker.str);
// // // chainMaker.removeLink(1)
// // // console.log(chainMaker.removeLink(1));

// console.log(chainMaker.finishChain());


