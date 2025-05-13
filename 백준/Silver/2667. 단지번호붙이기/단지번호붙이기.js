const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const N = Number(input[0]);
let arr = input.slice(1).map((row) => row.split('').map(Number));

let result = [];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (arr[i][j] === 1) {
      result.push(dfs(i, j));
    }
  }
}

console.log(result.length);
result.sort((a, b) => a - b);

result.forEach((num) => console.log(num));

function dfs(x, y) {
  if (x < 0 || x >= N || y < 0 || y >= N) return 0;

  if (arr[x][y] === 1) {
    arr[x][y] = 0;

    let count = 1;
    count += dfs(x - 1, y);
    count += dfs(x + 1, y);
    count += dfs(x, y - 1);
    count += dfs(x, y + 1);

    return count;
  }

  return 0;
}
