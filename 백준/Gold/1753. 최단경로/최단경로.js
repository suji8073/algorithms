const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const [V, E] = input[0].split(' ').map(Number);
const K = Number(input[1]);
const edges = input.slice(2).map(line => line.split(' ').map(Number));

// 인접 리스트 그래프 생성
const graph = Array.from({ length: V + 1 }, () => []);
for (const [u, v, w] of edges) {
  graph[u].push([v, w]);
}

// MinHeap 구현
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
      const left = 2 * idx + 1;
      const right = 2 * idx + 2;
      let smallest = idx;

      if (left < len && this.heap[left][1] < this.heap[smallest][1]) smallest = left;
      if (right < len && this.heap[right][1] < this.heap[smallest][1]) smallest = right;

      if (smallest === idx) break;
      [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]];
      idx = smallest;
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

// 다익스트라
const dist = Array(V + 1).fill(Infinity);
dist[K] = 0;

const pq = new MinHeap();
pq.push([K, 0]);

while (!pq.isEmpty()) {
  const [cur, curDist] = pq.pop();

  if (dist[cur] < curDist) continue;

  for (const [next, weight] of graph[cur]) {
    const cost = curDist + weight;
    if (cost < dist[next]) {
      dist[next] = cost;
      pq.push([next, cost]);
    }
  }
}

// 출력
console.log(
  dist
    .slice(1)
    .map(v => (v === Infinity ? 'INF' : v))
    .join('\n')
);
