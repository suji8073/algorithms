const fs = require('fs');
const [n, ...input] = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const N = Number(n);
const arr = input.map((row) => row.split(' ').map(Number));

if (N === 1) {
  console.log(0);
  return;
}

let minX = Number.MAX_SAFE_INTEGER;
let minY = Number.MAX_SAFE_INTEGER;
let maxX = Number.MIN_SAFE_INTEGER;
let maxY = Number.MIN_SAFE_INTEGER;

for (let i = 0; i < N; i++) {
  const [x, y] = arr[i];

  minX = Math.min(x, minX);
  minY = Math.min(y, minY);
  maxX = Math.max(x, maxX);
  maxY = Math.max(y, maxY);
}

console.log((maxX - minX) * (maxY - minY));
