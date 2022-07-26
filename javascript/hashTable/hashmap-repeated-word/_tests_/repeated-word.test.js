'use strict';
const HashTable = require('../../index');
const { repeatedWord } = require('../index');

describe('HashTable tests', () => {
  test('can split strings and set to hashtable', () => {
    let table = new HashTable(1024);

    let string = ("Hello, my name is abdi! what is your name?");


    expect(repeatedWord(string).wordMap).toBe(`The first repeating word is: name`);
  });

  test('can properly hash a key', () => {
    let table = new HashTable(1024);
    let hashedName = table.hash('Ryan');
    expect(hashedName).toBe(854);
  });

  test('can set a key value pair', () => {
    let table = new HashTable(1024);
    table.set('Lucky', 4);
    console.log(table);
    // this also proves we set a key/value pair
    expect(table.get('Lucky')).toBe(4);
  });

  test('can get a value from a key', () => {
    let table = new HashTable(1024);
    table.set('Abdi', 9123);
    expect(table.get('Abdi')).toBe(9123);
  });

  test('can get a value from a key', () => {
    let table = new HashTable(1024);
    table.set('Abdi', 9123);
    expect(table.keys()).toBe(9123);
  });
});
