'use strict';

const HashTable = require('../index');

let string = ('It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...');



function repeatedWord(string) {

  let table = new HashTable(1024);

  // using regex to grab actual words by themselves without commas or colons etc...
  let regExp = new RegExp(/\w+/g);

  let words = string.match(regExp);

  let wordMap = {};

  console.log(words);
  let firstWord = [];

  for (let word in words) {
    console.log(words);
    firstWord.push(`The first repeating word is: ${words[word]}`);
    break;
  }

  // gives the list of words and how many times they occur 
  for (let i = 0; i < words.length; i++) {
    console.log(words[i]);
    let wordCount = wordMap[words[i]];
    let count = wordCount ? wordCount : 0;
    wordMap[words[i]] = count + 1;
  }

  return {
    firstWord,
    wordMap
  };
}

repeatedWord(string);



module.exports = {
  repeatedWord
};



