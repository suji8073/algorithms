const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const arr = input.slice(1, N + 1).map((row) => row.split(' ').map(Number));
const target = input.slice(N + 1).map((row) => row.split(' ').map(Number));

const parent = Array.from({ length: N + 1 }, (_, i) => i);
for (const [start, end] of target) {
  union(start, end);
}

const edges = [];
for (let i = 0; i < N - 1; i++) {
  for (let j = i + 1; j < N; j++) {
    const [x1, y1] = arr[i];
    const [x2, y2] = arr[j];

    const cost = Math.sqrt(Math.abs(x1 - x2) ** 2 + Math.abs(y1 - y2) ** 2);
    edges.push([i + 1, j + 1, cost]);
  }
}
edges.sort((a, b) => a[2] - b[2]);

let costSum = 0;
for (const [start, end, cost] of edges) {
  if (!sameParent(start, end)) {
    costSum += cost;
    union(start, end);
  }
}
console.log(costSum.toFixed(2));

function union(x1, x2) {
  const p1 = findParent(x1);
  const p2 = findParent(x2);

  if (p1 < p2) parent[p2] = p1;
  else parent[p1] = p2;
}

function sameParent(t1, t2) {
  const p1 = findParent(t1);
  const p2 = findParent(t2);

  return p1 === p2;
}

function findParent(t1) {
  if (parent[t1] === t1) {
    return t1;
  }

  return (parent[t1] = findParent(parent[t1]));
}
