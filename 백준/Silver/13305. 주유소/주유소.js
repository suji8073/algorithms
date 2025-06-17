const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const N = Number(input[0]);
const dist = input[1].split(' ').map(Number);
const cost = input[2]
  .split(' ')
  .map(Number)
  .slice(0, N - 1);
const minCost = Math.min(...cost);

let result = 0;

for (let i = 0; i < N; i++) {
  if (cost[i] !== minCost) {
    result += dist[i] * cost[i];
    continue;
  }

  const totalDist = dist.slice(i).reduce((acc, cur) => acc + cur, 0);
  result += totalDist * cost[i];
  break;
}

console.log(result);
