'use strict';
const { listen } = require('express/lib/application');
const { Graph } = require('../index');

function businessTrip(graph, cityNames) {
  let trip = 0;
  // console.log(cityNames);

  if (!graph.adjacencyList.size) {
    return 'No Graph. Please Try Again';
  }


  for (let i = 0; i < cityNames.length; i++) {
    let flights = graph.adjacencyList.get(cityNames[i]);
    console.log(flights);


  }


  // for (let list of flights) {
  //   // console.log(list);
  //   trip += list.weight;
  //   if (cityNames.length === 2) {
  //     return `Direct: ${list.weight}`;
  //   }
  // }


  let sum = trip;
  return [`cost ${sum}`, null];
}

const graph = new Graph();

const Seattle = graph.addVertex('Seattle');
const Idaho = graph.addVertex('Idaho');
const Dallas = graph.addVertex('Dallas');
const NewYork = graph.addVertex('NewYork');
const LA = graph.addVertex('LA');
const Columbus = graph.addVertex('Columbus');

graph.addDirectEdge(Seattle, Idaho, 98);
graph.addDirectEdge(Idaho, Dallas, 140);
graph.addDirectEdge(Idaho, NewYork, 451);
graph.addDirectEdge(Dallas, NewYork, 240);
graph.addDirectEdge(Dallas, Columbus, 117);
graph.addDirectEdge(Dallas, LA, 120);
graph.addDirectEdge(LA, Columbus, 220);
graph.addDirectEdge(NewYork, Columbus, 134);


let results = businessTrip(graph, [Seattle,Idaho,NewYork]);

console.log(results);
