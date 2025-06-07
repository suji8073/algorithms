const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const N = Number(input[0]);
const arr = input[1].split(' ').map(Number);

const visited = Array(2000001).fill(false);
dfs(0, 0);

console.log(visited.findIndex((v) => !v));

function dfs(sum, idx) {
  visited[sum] = true;
  if (idx > N) return;

  dfs(sum, idx + 1);
  dfs(sum + arr[idx], idx + 1);
}
