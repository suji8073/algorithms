const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim();

const [N, K] = input.split(' ').map(Number);

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

console.log(bfs().join('\n'));

function bfs() {
  let min = Infinity;
  const dist = Array.from({ length: 100001 }, () => [Infinity, 0]);
  dist[N][0] = 0;
  dist[N][1] = 1;

  const queue = new MinHeap();
  queue.push([N, 0]);

  while (!queue.isEmpty()) {
    const [location, time] = queue.pop();
    if (time > min) continue;

    if (location === K) {
      min = Math.min(min, time);
    }

    for (const [nx] of [[location - 1], [location + 1], [2 * location]]) {
      if (nx >= 0 && nx <= 100000) {
        if (dist[nx][0] >= time + 1) {
          dist[nx][0] = time + 1;
          dist[nx][1]++;
          queue.push([nx, time + 1]);
        }
      }
    }
  }

  return dist[K];
}
