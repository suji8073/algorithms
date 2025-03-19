const fs = require('fs');
const inputFile = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const [N, M] = inputFile[0].split(' ').map(Number);
const arr = inputFile[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

let left = 0;
let right = arr[N - 1];

let result = Number.MIN_SAFE_INTEGER;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);

  const sum = arr
    .map((n) => (n > mid ? n - mid : 0))
    .reduce((acc, cur) => acc + cur, 0);

  if (sum >= M) {
    result = Math.max(result, mid);
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(result);
