/* eslint-disable no-prototype-builtins */
'use strict';

const { Stack } = require('../stacks-and-queues');


class Brackets {


  constructor() {
    this.stack = new Stack;
  }

  // still working this out I got help

  isBracketValid(brackets) {
    if (brackets.length % 2 !== 0) {
      return false;
    }
    const map = {
      '[': ']',
      '(': ')',
      '{': '}',
    };
    for (const bracket of brackets) {

      if (map.hasOwnProperty(bracket)) {
        this.stack.push(bracket);
      } else {
        const closeBracket = this.stack.pop();
        if (bracket !== map[closeBracket]) {
          return false;
        }
      }
    }
  }
}


// const { Stack } = require('../stacks-and-queues');

// help through leetcode
// isBracketsValid(bracket){

//       let stack = new Stack;

//   for (let i = 0; i < bracket.length; i++) {
//     let c = bracket.charAt(i);
//     switch (c) {
//       case '(': stack.push(')');
//         break;
//       case '[': stack.push(']');
//         break;
//       case '{': stack.push('}');
//         break;
//       default:
//         if (c !== stack.pop()) {
//           return false;
//         }
//     }
//   }

//   return stack.length === 0;
// }




module.exports = Brackets;



















