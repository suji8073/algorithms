const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input
  .slice(1, n + 1)
  .map((row) => row.trim().split(' ').map(Number));
const dots = input.slice(n + 1).map((row) =>
  row
    .trim()
    .split(' ')
    .map((n) => Number(n) - 1)
);

let result = 0;
dfs(dots[0][0], dots[0][1], cloneArr(arr), 0);
console.log(result);

function dfs(x, y, init, count) {
  if (x < 0 || x >= n || y < 0 || y >= n) return;
  if (init[x][y] === 1) return;

  if (x === dots[count][0] && y === dots[count][1]) {
    count++;
    if (count === m) {
      result++;
      return;
    }
  }

  init[x][y] = 1;

  dfs(x - 1, y, cloneArr(init), count);
  dfs(x + 1, y, cloneArr(init), count);
  dfs(x, y - 1, cloneArr(init), count);
  dfs(x, y + 1, cloneArr(init), count);
}

function cloneArr(arr) {
  return arr.map((row) => [...row]);
}
