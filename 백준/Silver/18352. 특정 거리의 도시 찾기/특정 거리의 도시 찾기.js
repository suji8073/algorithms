const fs = require('fs');
let inputFile = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const [n, m, k, x] = inputFile[0].split(' ').map(Number);
const arr = inputFile.slice(1).map((row) => row.split(' ').map(Number));

const graph = {};
for (const [start, end] of arr) {
  if (!graph[start]) graph[start] = [];
  graph[start].push(end);
}

for (const key in graph) {
  graph[key].sort((a, b) => a - b);
}

const visited = Array(n).fill(false);
const result = [];

bfs(x);
console.log(result.length === 0 ? -1 : result.sort((a, b) => a - b).join('\n'));

function bfs(init) {
  const queue = [[init, 0]];
  visited[init - 1] = true;
  let index = 0;

  while (index < queue.length) {
    const [next, count] = queue[index];
    index++;

    if (count === k) {
      result.push(next);
    }

    for (const value of graph[next] || []) {
      if (!visited[value - 1]) {
        visited[value - 1] = true;
        queue.push([value, count + 1]);
      }
    }
  }
  return;
}
