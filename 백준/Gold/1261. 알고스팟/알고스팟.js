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
      if (this.heap[parent][2] <= this.heap[idx][2]) break;
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
      if (left < len && this.heap[left][2] < this.heap[small][2]) small = left;
      if (right < len && this.heap[right][2] < this.heap[small][2])
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

const vectors = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

const [M, N] = input[0].split(' ').map(Number);
const arr = input.slice(1).map((row) => row.split('').map(Number));
const dist = Array.from({ length: N }, () => Array(M).fill(Infinity));

const queue = new MinHeap();
queue.push([0, 0, 0]);
dist[0][0] = 0;

while (!queue.isEmpty()) {
  const [x, y, broken] = queue.pop();

  for (const [dx, dy] of vectors) {
    const nx = dx + x;
    const ny = dy + y;

    if (nx >= 0 && nx < N && ny >= 0 && ny < M) {
      const cost = broken + arr[nx][ny];
      if (cost < dist[nx][ny]) {
        dist[nx][ny] = cost;
        queue.push([nx, ny, cost]);
      }
    }
  }
}
console.log(dist[N - 1][M - 1]);
