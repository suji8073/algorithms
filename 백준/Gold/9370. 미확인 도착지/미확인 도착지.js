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
      [this.heap[small], this.heap[idx]] = [this.heap[idx], this.heap[small]];
      idx = small;
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

let index = 1;
while (index < input.length) {
  const [n, m, t] = input[index].split(' ').map(Number);
  const [s, g, h] = input[index + 1].split(' ').map(Number);

  const arr = input
    .slice(index + 2, index + m + 2)
    .map((row) => row.split(' ').map(Number));

  const graph = Array.from({ length: n + 1 }, () => []);
  for (const [start, end, weight] of arr) {
    graph[start].push([end, weight]);
    graph[end].push([start, weight]);
  }

  const testCase = input
    .slice(index + m + 2, index + m + t + 2)
    .map(Number)
    .sort((a, b) => a - b);

  const distFromS = dijkstra(s);
  const distFromG = dijkstra(g);
  const distFromH = dijkstra(h);

  const result = [];
  for (const test of testCase) {
    const path1 = distFromS[g] + distFromG[h] + distFromH[test];
    const path2 = distFromS[h] + distFromH[g] + distFromG[test];

    if (
      distFromS[test] !== Infinity &&
      (path1 === distFromS[test] || path2 === distFromS[test])
    ) {
      result.push(test);
    }
  }

  function dijkstra(start) {
    const dist = Array(n + 1).fill(Infinity);
    const queue = new MinHeap();
    queue.push([start, 0]);
    dist[start] = 0;

    while (!queue.isEmpty()) {
      const [cur, curDist] = queue.pop();
      if (dist[cur] < curDist) continue;

      for (const [next, weight] of graph[cur]) {
        const cost = curDist + weight;
        if (dist[next] > cost) {
          dist[next] = cost;
          queue.push([next, cost]);
        }
      }
    }
    return dist;
  }

  console.log(result.join(' '));
  index += m + t + 2;
}
