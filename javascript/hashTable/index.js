'use strict';

const LinkedList = require('./linkedlist');



class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key) {
    let characters = key.split('');
    let asciiSum = characters.reduce((sum, character) => {
      return sum + character.charCodeAt(0);
    }, 0);
    let initialHash = asciiSum * 599;
    return initialHash % 1024;
  }

  set(key, value) {

    let position = this.hash(key);
    let data = { [key]: value };

    if (this.buckets[position]) {
      let bucket = this.buckets[position];
      bucket.add(data);
    } else {
      let bucket = new LinkedList();
      bucket.add(data);
      this.buckets[position] = bucket;
    }
  }
  get(key) {
    let position = this.hash(key);

    if (this.buckets[position]) {
      let bucket = this.buckets[position];
      let value = bucket.head.value[key];
      return value;
    }
  }

  contains(key) {
    let position = this.hash(key);
    if (this.bucket[position]) {
      console.log('Key Exists');
      return true;
    } else {
      console.log('Key Does Not Exists');
      return false;
    }
  }

  keys() {
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i] !== null) {
        console.log(`Bucket: ${i}`);
        this.buckets[i].forEach(element => {
          console.log(`${element.key} : ${element.value}`);
        });
        console.log('null');
      }
    }
  }
}

module.exports = HashTable;




