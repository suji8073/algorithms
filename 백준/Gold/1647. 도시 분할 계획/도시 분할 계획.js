const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const arr = input.slice(1).map((row) => row.split(' ').map(Number));

arr.sort((a, b) => a[2] - b[2]);

const parent = Array.from({ length: N + 1 }, (_, i) => i);

const costArr = [];
for (const [start, end, cost] of arr) {
  if (!sameParent(start, end)) {
    costArr.push(cost);
    union(start, end);
  }
}

costArr.pop();
console.log(costArr.reduce((acc, cur) => acc + cur, 0));

function union(x1, x2) {
  const p1 = findParent(x1);
  const p2 = findParent(x2);

  if (p1 < p2) {
    parent[p2] = p1;
  } else {
    parent[p1] = p2;
  }
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
