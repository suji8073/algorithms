const fs = require('fs');
const inputFile = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split('\n')
  .map((row) => row.split(' ').map(Number));

const [M, N, K] = inputFile[0];
const arr = inputFile.slice(1);

let graph = Array.from({ length: N }, () => Array(M).fill(0));
for (const [x1, y1, x2, y2] of arr) {
  for (let i = x1; i < x2; i++) {
    for (let j = y1; j < y2; j++) {
      graph[i][j] = 1;
    }
  }
}

const countArr = [];
for (let i = 0; i < graph.length; i++) {
  for (let j = 0; j < graph[0].length; j++) {
    if (graph[i][j] === 0) {
      countArr.push(0);
      dfs(i, j);
    }
  }
}
console.log(countArr.length);
console.log(countArr.sort((a, b) => a - b).join(' '));

function dfs(start, end) {
  if (start < 0 || start >= N || end < 0 || end >= M) return;
  if (graph[start][end] === 1) return;

  graph[start][end] = 1;
  countArr[countArr.length - 1]++;

  dfs(start - 1, end);
  dfs(start + 1, end);
  dfs(start, end - 1);
  dfs(start, end + 1);
}
