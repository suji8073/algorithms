const fs = require('fs');
const [_, ...input] = fs
  .readFileSync(0, 'utf-8')
  .trim()
  .split('\n')
  .map(Number);

class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);
    this._up();
  }

  pop() {
    if (this.heap.length === 0) return 0;
    if (this.heap.length === 1) return this.heap.pop();
    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._down();
    return top;
  }

  _up() {
    let idx = this.heap.length - 1;
    while (idx > 0) {
      const parent = Math.floor((idx - 1) / 2);
      if (this.heap[parent] <= this.heap[idx]) break;
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

      if (left < len && this.heap[left] < this.heap[small]) small = left;
      if (right < len && this.heap[right] < this.heap[small]) small = right;

      if (small === idx) break;
      [this.heap[small], this.heap[idx]] = [this.heap[idx], this.heap[small]];
      idx = small;
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

const result = [];
const queue = new MinHeap();
input.map((num) => (num === 0 ? result.push(queue.pop()) : queue.push(num)));
console.log(result.join('\n'));
