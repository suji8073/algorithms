const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const N = Number(input[0]);
const M = Number(input[1]);
const arr = input.slice(2, M + 2).map((row) => row.split(' ').map(Number));
const [t1, t2] = input[M + 2].split(' ').map(Number);

const graph = Array.from({ length: N + 1 }, () => []);
for (const [start, end, weight] of arr) {
  graph[start].push([end, weight]);
}

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
      [this.heap[small], this.heap[idx]] = [this.heap[idx], this.heap[small]];
      idx = small;
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

const queue = new MinHeap();
const dist = Array.from({ length: N + 1 }, () => [Infinity, []]);
queue.push([t1, 0, [t1]]);
dist[t1][0] = 0;
dist[t1][1] = [t1];

while (!queue.isEmpty()) {
  const [cur, curDist, path] = queue.pop();
  if (dist[cur][0] < curDist) continue;
  for (const [next, weight] of graph[cur]) {
    const cost = curDist + weight;

    if (cost < dist[next][0]) {
      dist[next][0] = cost;
      dist[next][1] = [...path, next];
      queue.push([next, cost, [...path, next]]);
    }
  }
}

const result = dist[t2];
console.log(result[0]);
console.log(result[1].length);
console.log(result[1].join(' '));
