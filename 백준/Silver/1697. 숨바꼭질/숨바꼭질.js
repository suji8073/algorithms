const fs = require('fs');

const [start, end] = fs
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
  .split(' ')
  .map(Number);

const MAX = 100000;

console.log(bfs(start, end));

function bfs(start, end) {
  const queue = [[start, 0]];
  const visited = Array(MAX + 1).fill(false);

  visited[start] = true;

  while (queue.length > 0) {
    const [current, count] = queue.shift();
    if (current === end) return count;

    const nextNumArr = [current + 1, current - 1, current * 2];
    for (const next of nextNumArr) {
      if (next >= 0 && next <= MAX && !visited[next]) {
        visited[next] = true;
        queue.push([next, count + 1]);
      }
    }
  }
}
