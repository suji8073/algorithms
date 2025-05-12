const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const [N, M, K] = input[0].split(' ').map(Number);
const arr = input.slice(1).map((row) => row.split('').map(Number));

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
const visited = Array.from({ length: N }, () =>
  Array.from({ length: M }, () => Array(K + 1).fill(false))
);

const vectors = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

bfs();

function bfs() {
  const queue = new Queue();
  queue.push([0, 0, 1, 0]);
  visited[0][0][0] = true;

  while (queue.length > 0) {
    const [x, y, count, broken] = queue.shift();

    if (x === N - 1 && y === M - 1) {
      console.log(count);
      return;
    }

    for (const [dx, dy] of vectors) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;

      if (arr[nx][ny] === 1 && broken < K && !visited[nx][ny][broken + 1]) {
        visited[nx][ny][broken + 1] = true;
        queue.push([nx, ny, count + 1, broken + 1]);
      }

      if (arr[nx][ny] === 0 && !visited[nx][ny][broken]) {
        visited[nx][ny][broken] = true;
        queue.push([nx, ny, count + 1, broken]);
      }
    }
  }
  console.log(-1);
}
