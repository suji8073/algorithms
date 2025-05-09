const fs = require('fs');
const [row, ...input] = fs.readFileSync(0, 'utf-8').trim().split('\n');

const [n, m] = row.split(' ').map(Number);
const arr = input.map((row) => row.split(' ').map(Number));

const parent = Array.from({ length: n + 1 }, (_, i) => i);

for (const [check, a, b] of arr) {
  if (check === 0) {
    if (!sameParent(a, b)) {
      union(a, b);
    }
  } else {
    console.log(!sameParent(a, b) ? 'NO' : 'YES');
  }
}

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
