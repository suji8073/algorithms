const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const arr = input[1].split(' ').map(Number);
const M = Number(input[2]);

let left = 0;
let right = Math.max(...arr);
let max = 0;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  const sum = arr.reduce((acc, cur) => acc + (cur > mid ? mid : cur), 0);

  if (sum <= M) {
    max = Math.max(max, mid);
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(max);
