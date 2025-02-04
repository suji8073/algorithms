const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1).map((row) => row.split(' ').map(Number));

const result = Array.from({ length: n }, () => Array(n).fill(0));

let count = 1;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (result[i][j] === 0) {
      dfs(i, j, count, [1, 2, 3, 4, 5, 6]);
      count++;
    }
  }
}

result.forEach((row) => console.log(row.join(' ')));

function dfs(x, y, num, init) {
  if (x < 0 || x >= n || y < 0 || y >= n) return;

  const target = arr[x][y];

  if (init[target - 1] === 0) return;

  init[target - 1] = 0;
  result[x][y] = num;

  dfs(x - 1, y, num, init);
  dfs(x + 1, y, num, init);
  dfs(x, y - 1, num, init);
  dfs(x, y + 1, num, init);
}
