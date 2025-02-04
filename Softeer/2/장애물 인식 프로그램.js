const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const n = Number(inputData[0]);
const graph = inputData.slice(1).map((row) => row.split('').map(Number));

function dfs(x, y) {
  if (x < 0 || x >= n || y < 0 || y >= n) return 0;

  if (graph[x][y] === 1) {
    graph[x][y] = 0;

    let count = 1;
    count += dfs(x - 1, y);
    count += dfs(x + 1, y);
    count += dfs(x, y - 1);
    count += dfs(x, y + 1);
    return count;
  }
  return 0;
}

let result = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    let current = dfs(i, j);
    if (current > 0) result.push(current);
  }
}

console.log(result.length);
result.sort((a, b) => a - b).map((n) => console.log(n));
