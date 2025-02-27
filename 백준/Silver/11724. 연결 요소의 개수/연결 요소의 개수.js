const fs = require('fs');
const inputFile = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split('\n')
  .map((row) => row.split(' ').map(Number));

const [N, M] = inputFile[0];
const array = inputFile.slice(1);

const graph = {};
for (const [start, end] of array) {
  if (!graph[start]) graph[start] = [];
  if (!graph[end]) graph[end] = [];

  graph[start].push(end);
  graph[end].push(start);
}

const visited = Array(Number(N)).fill(false);

let count = 0;
for (let i = 1; i <= N; i++) {
  if (!visited[i - 1]) {
    dfs(i);
    count++;
  }
}

console.log(count);

function dfs(start) {
  visited[start - 1] = true;

  for (const value of graph[start] || []) {
    if (!visited[value - 1]) {
      visited[value - 1] = true;
      dfs(value);
    }
  }
}
