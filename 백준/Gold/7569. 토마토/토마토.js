const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

class Node {
  constructor(value) {
    this.cur = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }
  push(value) {
    const node = new Node(value);
    if (this.length === 0) {
      this.front = node;
    } else {
      this.rear.next = node;
    }
    this.rear = node;
    this.length++;
  }
  shift() {
    if (this.length === 0) return false;
    const returnValue = this.front.cur;
    this.front = this.front.next;
    this.length--;
    return returnValue;
  }
}

const vectors = [
  [0, 0, 1],
  [0, 0, -1],
  [0, 1, 0],
  [0, -1, 0],
  [1, 0, 0],
  [-1, 0, 0],
];

const [M, N, H] = input.shift().split(' ').map(Number);

const tomato = [];
const box = [];
let count = 0;
let height = 0;

while (height < H) {
  const arr = input.splice(0, N).map((row) => row.split(' ').map(Number));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (arr[i][j] === 0) count++;
      else if (arr[i][j] === 1) tomato.push([height, i, j]);
    }
  }

  box.push(arr);
  height++;
}

console.log(bfs());

function bfs() {
  const queue = new Queue();
  tomato.map((t) => queue.push([...t, 0]));
  let max = 0;

  while (queue.length > 0) {
    const [h, x, y, c] = queue.shift();
    max = Math.max(max, c);

    for (const vector of vectors) {
      const nh = h + vector[0];
      const nx = x + vector[1];
      const ny = y + vector[2];

      if (nh < 0 || nh >= H || nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
      if (box[nh][nx][ny] === 0) {
        count--;
        box[nh][nx][ny] = 1;
        queue.push([nh, nx, ny, c + 1]);
      }
    }
  }

  return count === 0 ? max : -1;
}
