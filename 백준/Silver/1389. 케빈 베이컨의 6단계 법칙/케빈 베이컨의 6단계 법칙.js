const fs = require('fs');
const inputFile = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const [N, M] = inputFile[0].split(' ').map(Number);
const array = inputFile.slice(1).map((row) => row.split(' ').map(Number));

const graph = {};
for (const [A, B] of array) {
  if (!graph[A]) graph[A] = [];
  if (!graph[B]) graph[B] = [];

  graph[A].push(B);
  graph[B].push(A);
}

let minNum = Number.MAX_SAFE_INTEGER;
let minIndex = Number.MAX_SAFE_INTEGER;

for (let i = 1; i <= N; i++) {
  const result = bfs(i).reduce((acc, cur) => acc + cur, 0);
  if (minNum > result) {
    minNum = result;
    minIndex = i;
  }
}

console.log(minIndex);

function bfs(start) {
  const visited = Array(N).fill(false);
  visited[start - 1] = 0;

  const queue = [];
  for (const value of graph[start]) {
    queue.push([value, 1]);
    visited[value - 1] = 1;
  }

  while (queue.length > 0) {
    const [next, count] = queue.shift();

    for (const value of graph[next] || []) {
      if (visited[value - 1] === false) {
        visited[value - 1] = count + 1;
        queue.push([value, count + 1]);
      }
    }
  }
  return visited;
}
