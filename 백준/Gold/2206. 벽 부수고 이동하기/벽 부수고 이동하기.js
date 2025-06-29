const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

class Node {
  constructor(node) {
    this.cur = node;
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

const [N, M] = input[0].split(' ').map(Number);
const arr = input.slice(1).map((row) => row.split('').map(Number));

const vectors = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

const queue = new Queue();
queue.push([0, 0, 1, 0]);

const visited = Array.from({ length: N }, () =>
  Array.from({ length: M }, () => [false, false])
);

while (queue.length > 0) {
  const [x, y, count, broken] = queue.shift();

  if (x === N - 1 && y === M - 1) {
    console.log(count);
    return;
  }

  for (const [dx, dy] of vectors) {
    const nx = dx + x;
    const ny = dy + y;

    if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
    if (visited[nx][ny][broken]) continue;

    if (arr[nx][ny] === 0) {
      visited[nx][ny][broken] = true;
      queue.push([nx, ny, count + 1, broken]);
    } else if (arr[nx][ny] === 1 && broken === 0) {
      visited[nx][ny][1] = true;
      queue.push([nx, ny, count + 1, 1]);
    }
  }
}

console.log(-1);
