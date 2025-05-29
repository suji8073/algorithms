class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);
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

      if (
        Math.abs(this.heap[parent]) < Math.abs(this.heap[idx]) ||
        (Math.abs(this.heap[parent]) === Math.abs(this.heap[idx]) &&
          this.heap[parent] <= this.heap[idx])
      )
        break;
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

      const compare = (a, b) => {
        return (
          Math.abs(a) < Math.abs(b) || (Math.abs(a) === Math.abs(b) && a < b)
        );
      };

      if (left < len && compare(this.heap[left], this.heap[small]))
        small = left;
      if (right < len && compare(this.heap[right], this.heap[small]))
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

const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');
const arr = input.slice(1).map(Number);

const map = new MinHeap();
for (const num of arr) {
  if (num !== 0) {
    map.push(num);
    continue;
  }

  if (map.isEmpty()) console.log(0);
  else {
    console.log(map.pop());
  }
}
