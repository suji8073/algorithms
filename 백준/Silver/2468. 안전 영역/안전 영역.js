const fs = require('fs');
const [n, ...input] = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const array = input.map((row) => row.split(' ').map(Number));

const flatMap = [...new Set(array.flat())];
const MIN = Math.min(...flatMap);
const MAX = Math.max(...flatMap);

let maxNumber = 1;
for (let i = MIN; i <= MAX; i++) {
  const visited = input.map((row) =>
    row.split(' ').map((item) => Number(item) > i)
  );

  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (visited[i][j]) {
        dfs(visited, i, j);
        count++;
      }
    }
  }
  maxNumber = Math.max(maxNumber, count);
}

console.log(maxNumber);

function dfs(arr, x, y) {
  if (x < 0 || y < 0 || x >= n || y >= n) return;
  if (!arr[x][y]) return;
  arr[x][y] = false;

  dfs(arr, x - 1, y);
  dfs(arr, x + 1, y);
  dfs(arr, x, y - 1);
  dfs(arr, x, y + 1);
}
