'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
    this.vertices = new Set();
  }

  addVertex(value) {
    const vertex = new Vertex(value);
    this.adjacencyList.set(vertex, []);
    this.vertices.add(vertex);
    return vertex;
  }

  addDirectEdge(startVertex, endVertex, weight) {
    const neighbors = this.adjacencyList.get(startVertex);
    neighbors.push(new Edge(endVertex, weight));
  }

  getNeighbors(vertex) {
    return [...this.adjacencyList.get(vertex)];
  }

  getVertices() {
    return this.vertices.values();
  }

  size() {
    return this.vertices.size;
  }

  depthFirst(root, cb) {
    const stack = [root];
    const visited = new Set();
    visited.add(root);
    let current = null;


    while (stack.length) {
      current = stack.pop();

      if (cb) console.log(current.value);

      const neighbors = this.getNeighbors(current);
      for (let edge of neighbors) {
        if (!visited.has(edge.vertex)) {
          visited.add(edge.vertex);
          stack.push(edge.vertex);
        }
      }

    }
    return visited;
  }

  breadthFirst(root, cb) {
    const queue = [root];
    const visited = new Set();
    visited.add(root);
    let current = null;


    while (queue.length) {
      current = queue.pop();

      if (cb) console.log(current.value);

      const neighbors = this.getNeighbors(current);
      for (let edge of neighbors) {
        if (!visited.has(edge.vertex)) {
          visited.add(edge.vertex);
          queue.unshift(edge.vertex);
        }
      }

    }
    return visited;
  }
}


module.exports = { Graph, Vertex, Edge };
