const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const N = Number(input[0]);
const arr = input.slice(1).map((row) => row.split(' ').map(Number));

let max = 0;
dfs(0, 0);
console.log(max);

function dfs(index, sum) {
  max = Math.max(sum, max);
  if (index === N) {
    return;
  }

  if (index + arr[index][0] <= N) {
    dfs(index + arr[index][0], sum + arr[index][1]);
  }

  dfs(index + 1, sum);
}
