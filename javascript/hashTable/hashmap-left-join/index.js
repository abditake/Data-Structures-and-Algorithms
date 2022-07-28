'use strict';
const HashTable = require('../index');

function LeftJoins(hash1, hash2) {

  // let synonymKeyArr = [['diligent'], ['fond'], ['guide'], ['outfit'], ['wrath']];
  // let antonymKeyArr = [['diligent'], ['fond'], ['guide'], ['flow'], ['wrath']];

  // used arrays to built this and utilzed the o(1) lookup of hashmaps to jut add new elements to bucket

  let synonymKeyArr = [['diligent',hash1.get('diligent')], ['fond',hash1.get('fond')], ['guide',hash1.get('guide')], ['outfit',hash1.get('outfit')], ['wrath',hash1.get('wrath')]];
  let antonymKeyArr = [['diligent'], ['fond'], ['guide'], ['flow'], ['wrath']];


  for (let i = 0; i < synonymKeyArr.length; i++) {
    // console.log('Synonym', hash1.get(synonymKeyArr[i]));
    // console.log('Antonym', hash2.get(antonymKeyArr[i]));
    for (let j = 0; j < synonymKeyArr[i].length; j++) {
      if (synonymKeyArr[i][j] === antonymKeyArr[i][j]) {
        console.log('collision');
        synonymKeyArr[i].push(hash2.get(antonymKeyArr[i][j]));
        break;
      } else {
        console.log('no collision');
        synonymKeyArr[i].push(null);
        break;
      }
    }
    return synonymKeyArr
  }
}


const synonymMap = new HashTable(1024);
const antonymMap = new HashTable(1024);

synonymMap.set("diligent", "employed");
synonymMap.set("fond", "enamored");
synonymMap.set("guide", "usher");
synonymMap.set("outfit", "garb");
synonymMap.set("wrath", "anger");

antonymMap.set("diligent", "idle");
antonymMap.set("fond", "averse");
antonymMap.set("guide", "follow");
antonymMap.set("flow", "jam");
antonymMap.set("wrath", "delight");

LeftJoins(synonymMap, antonymMap);


