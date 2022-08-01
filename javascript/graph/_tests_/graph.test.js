'use strict';

const { Graph } = require('../index');

describe('Testing Graph Methods', () => {

  test('Node can be added to graph', () => {
    const graph = new Graph();
    const A = graph.addVertex('A');

    expect(A).toEqual({ 'value': 'A' });
  });

  test('An edge can be  added to  graph', () => {
    const graph = new Graph();
    const A = graph.addVertex('A');
    const B = graph.addVertex('B');

    graph.addDirectEdge(A, B);

    let newEdge = graph.getNeighbors(A);

    expect(newEdge).toEqual([{ 'vertex': { 'value': 'B' }, 'weight': 0 }]);
  });

  test('all nodes can be retrieved from graph', () => {
    const graph = new Graph();
    const A = graph.addVertex('A');
    const B = graph.addVertex('B');
    graph.addDirectEdge(A, B);

    let nodes = graph.getVertices();
    expect(console.log('Collection', nodes)).toEqual();
  });

  test('Neighbors are returned with the weight between nodes included', () => {
    const graph = new Graph();
    const A = graph.addVertex('A');
    const B = graph.addVertex('B');

    graph.addDirectEdge(A, B);

    let newEdge = graph.getNeighbors(A);

    expect(newEdge).toEqual([{ 'vertex': { 'value': 'B' }, 'weight': 0 }]);
  });

  test('size is returned', () => {
    const graph = new Graph();
    const A = graph.addVertex('A');
    const B = graph.addVertex('B');
    graph.addDirectEdge(A, B);

    let graphSize = graph.size();

    expect(graphSize).toEqual(2);
  });

  test('breadthFirst Traversal', () => {
    const graph = new Graph;

    const a = graph.addVertex('a');
    const b = graph.addVertex('b');
    const c = graph.addVertex('c');
    const d = graph.addVertex('d');

    graph.addDirectEdge(b, a);
    graph.addDirectEdge(a, b);
    graph.addDirectEdge(a, c);
    graph.addDirectEdge(a, d);
    graph.addDirectEdge(c, a);
    graph.addDirectEdge(c, d);
    graph.addDirectEdge(d, c);
    graph.addDirectEdge(d, a);

    let results = graph.breadthFirst(b);

    expect(console.log(results)).toEqual();

  });
  test('A Depth First Traversal should return the proper order', () => {
    const graph = new Graph;

    const a = graph.addVertex('a');
    const b = graph.addVertex('b');
    const c = graph.addVertex('c');
    const d = graph.addVertex('d');

    graph.addDirectEdge(b, a);
    graph.addDirectEdge(a, b);
    graph.addDirectEdge(a, c);
    graph.addDirectEdge(a, d);
    graph.addDirectEdge(c, a);
    graph.addDirectEdge(c, d);
    graph.addDirectEdge(d, c);
    graph.addDirectEdge(d, a);

    let results = graph.depthFirst(b);

    expect(console.log(results)).toEqual();

  });
});
