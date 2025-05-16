const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const [N, E] = input[0].split(' ').map(Number);
const arr = input.slice(1, E + 1).map((row) => row.split(' ').map(Number));
const [v1, v2] = input[E + 1].split(' ').map(Number);

const graph = Array.from({ length: N + 1 }, () => []);
for (const [start, end, weight] of arr) {
  graph[start].push([end, weight]);
  graph[end].push([start, weight]);
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(v) {
    this.heap.push(v);
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
      if (right < len && this.heap[right][1] < this.heap[small][1]) small = right;

      if (small === idx) break;
      [this.heap[small], this.heap[idx]] = [this.heap[idx], this.heap[small]];
      idx = small;
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

const distFrom1 = dijkstra(1);
const distFromV1 = dijkstra(v1);
const distFromV2 = dijkstra(v2);

const path1 = distFrom1[v1] + distFromV1[v2] + distFromV2[N];
const path2 = distFrom1[v2] + distFromV2[v1] + distFromV1[N];

const min = Math.min(path1, path2);
console.log(min === Infinity ? -1 : min);

function dijkstra(start) {
  const queue = new MinHeap();
  const dist = Array(N + 1).fill(Infinity);
  dist[start] = 0;
  queue.push([start, 0]);

  while (!queue.isEmpty()) {
    const [cur, curDist] = queue.pop();

    if (dist[cur] < curDist) continue;
    for (const [next, weight] of graph[cur]) {
      const cost = curDist + weight;
      if (cost < dist[next]) {
        dist[next] = cost;
        queue.push([next, cost]);
      }
    }
  }

  return dist;
}
