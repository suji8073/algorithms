const fs = require('fs');
const [n, ...input] = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const N = Number(n);
const arr = input.map((row) => row.split(' ').map(Number));

const map = new Map();
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (arr[i][j] === 1) {
      map.set(i, map.has(i) ? [...map.get(i), j] : [j]);
    }
  }
}

const visited = Array.from({ length: N }, () => Array(N).fill(0));
[...map.keys()].map((key) => bfs(key));
console.log(visited.map((row) => row.join(' ')).join('\n'));

function bfs(start) {
  const queue = [];

  for (const value of map.get(start)) {
    queue.push([start, value]);
    visited[start][value] = 1;
  }

  while (queue.length > 0) {
    const [row, col] = queue.shift();

    for (const value of map.get(col) || []) {
      if (visited[row][value] === 0) {
        visited[row][value] = 1;
        queue.push([row, value]);
      }
    }
  }
}
