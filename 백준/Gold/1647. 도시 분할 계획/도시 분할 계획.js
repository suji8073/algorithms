const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const arr = input.slice(1).map((row) => row.split(' ').map(Number));

arr.sort((a, b) => a[2] - b[2]);
const parent = Array.from({ length: N + 1 }, (_, i) => i);

const result = [];
for (const [start, end, cost] of arr) {
  if (!sameParent(start, end)) {
    result.push(cost);
    union(start, end);
  }
}
console.log(
  result.slice(0, result.length - 1).reduce((acc, cur) => acc + cur, 0)
);

function union(x, y) {
  const p1 = findParent(x);
  const p2 = findParent(y);

  if (p1 < p2) parent[p2] = p1;
  else parent[p1] = p2;
}

function sameParent(x, y) {
  const p1 = findParent(x);
  const p2 = findParent(y);

  return p1 === p2;
}

function findParent(t) {
  if (parent[t] === t) return t;
  return (parent[t] = findParent(parent[t]));
}
