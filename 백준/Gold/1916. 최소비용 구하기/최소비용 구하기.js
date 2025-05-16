const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(val) {
    this.heap.push(val);
    this._up();
  }

  pop() {
    if (this.heap.length <= 1) return this.heap.pop();
    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._down();
    return top;
  }

  _up() {
    let idx = this.heap.length - 1;
    while (idx > 0) {
      const parent = Math.floor((idx - 1) / 2);
      if (this.heap[parent][1] <= this.heap[idx][1]) break;
      [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
      idx = parent;
    }
  }

  _down() {
    let idx = 0;
    const len = this.heap.length;

    while (true) {
      let left = 2 * idx + 1;
      let right = 2 * idx + 2;
      let small = idx;

      if (left < len && this.heap[left][1] < this.heap[small][1]) small = left;
      if (right < len && this.heap[right][1] < this.heap[small][1])
        small = right;

      if (small === idx) break;
      [this.heap[idx], this.heap[small]] = [this.heap[small], this.heap[idx]];
      idx = small;
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

const N = Number(input[0]);
const M = Number(input[1]);

const arr = input.slice(2, 2 + M).map((row) => row.split(' ').map(Number));
const [start, end] = input[2 + M].split(' ').map(Number);

const graph = Array.from({ length: N + 1 }, () => []);
for (const [x, y, weight] of arr) {
  graph[x].push([y, weight]);
}

const dist = Array(N + 1).fill(Infinity);
dist[start] = 0;
const queue = new MinHeap();
queue.push([start, 0]);

while (!queue.isEmpty()) {
  const [cur, curDist] = queue.pop();
  if (dist[cur] < curDist) continue;

  for (const [node, weight] of graph[cur]) {
    const cost = curDist + weight;
    if (dist[node] > cost) {
      dist[node] = cost;
      queue.push([node, cost]);
    }
  }
}

console.log(dist[end]);
