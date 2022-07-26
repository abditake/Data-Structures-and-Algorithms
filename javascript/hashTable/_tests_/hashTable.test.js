'use strict';
const HashTable  = require('../index');

describe('HashTable tests', () =>{
  test('can create a table', () =>{
    let table = new HashTable(1024);
    expect(table.buckets[0]).toBe(undefined);
  });

  test('can properly hash a key', () =>{
    let table = new HashTable(1024);
    let hashedName = table.hash('Ryan');
    expect(hashedName).toBe(854);
  });

  test('can set a key value pair', () =>{
    let table = new HashTable(1024);
    table.set('Lucky', 4);
    console.log(table);
    // this also proves we set a key/value pair
    expect(table.get('Lucky')).toBe(4);
  });

  test('can get a value from a key', () =>{
    let table = new HashTable(1024);
    table.set('Abdi', 9123);
    expect(table.get('Abdi')).toBe(9123);
  });

  test('can get a value from a key', () =>{
    let table = new HashTable(1024);
    table.set('Abdi', 9123);
    expect(table.keys()).toBe(9123);
  });
});
