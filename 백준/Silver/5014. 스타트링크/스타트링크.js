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

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim();

const [F, S, G, U, D] = input.split(' ').map(Number);

const visited = Array(F + 1).fill(false);
const queue = new Queue();
queue.push([S, 0]);

while (queue.length > 0) {
  const [cur, count] = queue.shift();
  if (cur === G) {
    console.log(count);
    return;
  }

  for (const nx of [cur + U, cur - D]) {
    if (nx <= 0 || nx > F) continue;
    if (visited[nx]) continue;

    visited[nx] = true;
    queue.push([nx, count + 1]);
  }
}

console.log('use the stairs');
