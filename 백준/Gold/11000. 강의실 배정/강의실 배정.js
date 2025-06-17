const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const N = Number(input[0]);
const arr = input.slice(1).map((row) => row.split(' ').map(Number));
arr.sort((a, b) => a[0] - b[0]);

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

  peek() {
    return this.heap[0];
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

  getLength() {
    return this.heap.length;
  }
}

const queue = new MinHeap();

for (const [start, end] of arr) {
  if (queue.getLength() === 0) {
    queue.push([start, end]);
    continue;
  }

  const last = queue.peek();
  if (last[1] <= start) {
    queue.pop();
  }

  queue.push([start, end]);
}

console.log(queue.getLength());
