const fs = require('fs');
const inputFile = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const N = Number(inputFile[0]);
const [start, end] = inputFile[1].split(' ').map(Number);
const array = inputFile.slice(3).map((row) => row.split(' ').map(Number));

const graph = {};
for (const [A, B] of array) {
  if (!graph[A]) graph[A] = [];
  if (!graph[B]) graph[B] = [];

  graph[A].push(B);
  graph[B].push(A);
}

const visited = Array(N).fill(false);
console.log(bfs(start));

function bfs(init) {
  const queue = [];
  for (const value of graph[init]) {
    queue.push([value, 1]);
    queue.push([value, 1]);
  }
  visited[init - 1] = true;

  while (queue.length > 0) {
    const [next, count] = queue.shift();

    if (next === end) return count;
    for (const value of graph[next] || []) {
      if (!visited[value - 1]) {
        visited[value - 1] = true;
        queue.push([value, count + 1]);
      }
    }
  }

  return -1;
}
