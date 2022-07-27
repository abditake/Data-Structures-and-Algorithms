
const HashTable = require('../hashTable/index');

function treeIntersection(list1, list2) {
  const hashedList = new HashTable(1024);
  const intersections = [];

  addNodes(list1.root, hashedList);
  checkCollisions(list2.root, hashedList, intersections);
  return intersections;
}

function addNodes(node, table) {
  if (node) {
    table.set(node.data.toString(), node.data);
    addNodes(node.left, table);
    addNodes(node.right, table);
  }
  return;
}

function checkCollisions(node, table, intersections) {


  if (node) {
    // might now be checking the table correctly
    if (table.contains(node.data)) {
      intersections.push(node.data);
    }
    checkCollisions(node.left, table, intersections);
    // having issues here maybe 
    checkCollisions(node.right, table, intersections);
  }
  return;
}


module.exports = {
  treeIntersection
};
