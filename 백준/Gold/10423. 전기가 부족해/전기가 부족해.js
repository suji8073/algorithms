const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const [N, M, K] = input[0].split(' ').map(Number);
const target = input[1].split(' ').map(Number);
const arr = input.slice(2).map((row) => row.split(' ').map(Number));

const parent = Array.from({ length: N + 1 }, (_, i) => i);

for (let i = 0; i < K - 1; i++) {
  union(target[i], target[i + 1]);
}

arr.sort((a, b) => a[2] - b[2]);

let costSum = 0;
for (const [start, end, cost] of arr) {
  if (!sameParent(start, end)) {
    costSum += cost;
    union(start, end);
  }
}
console.log(costSum);

function union(t1, t2) {
  const p1 = findParent(t1);
  const p2 = findParent(t2);

  if (p1 < p2) parent[p2] = p1;
  else parent[p1] = p2;
}

function sameParent(t1, t2) {
  const p1 = findParent(t1);
  const p2 = findParent(t2);

  return p1 === p2;
}

function findParent(target) {
  if (parent[target] === target) {
    return target;
  }
  return (parent[target] = findParent(parent[target]));
}
