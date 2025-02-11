const fs = require('fs');
let input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const [n, s] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let count = 0;
dfs(0, 0);
console.log(count);

function dfs(index, sum) {
  if (index >= n) return;

  sum += arr[index];
  if (sum === s) count++;

  dfs(index + 1, sum);
  dfs(index + 1, sum - arr[index]);
}
