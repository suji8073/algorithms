const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const N = Number(input[0]);
const arr = input.slice(1).map((row) => row.split(' ').map(Number));

let zeroCount = 0;
let oneCount = 0;

dfs(0, 0, N);

console.log(zeroCount);
console.log(oneCount);

function dfs(x, y, n) {
  const current = arr[x][y];
  let isPerfect = true;

  for (let i = x; i < x + n; i++) {
    for (let j = y; j < y + n; j++) {
      if (current !== arr[i][j]) {
        isPerfect = false;
        break;
      }
    }
  }

  if (isPerfect) {
    current === 1 ? oneCount++ : zeroCount++;
    return;
  }

  const half = n / 2;
  dfs(x + half, y, half);
  dfs(x, y + half, half);
  dfs(x + half, y + half, half);
  dfs(x, y, half);
}
