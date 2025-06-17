const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const N = Number(input[0]);
const dist = input[1].split(' ').map(BigInt);
const cost = input[2]
  .split(' ')
  .slice(0, N - 1)
  .map(BigInt);

let result = BigInt(0);

for (let i = 0; i < N - 1; i++) {
  const targetCost = cost[i];
  let totalDist = dist[i];

  while (i + 1 < N - 1 && cost[i + 1] >= targetCost) {
    totalDist += dist[i + 1];
    i++;
  }

  result += totalDist * targetCost;
}

console.log(result.toString());
