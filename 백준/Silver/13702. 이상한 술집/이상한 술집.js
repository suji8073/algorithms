const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);
const arr = input.slice(1).map(Number);

let left = 1;
let right = Math.max(...arr);
let result = 0;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  const count = arr.reduce((acc, cur) => acc + Math.floor(cur / mid), 0);

  if (count >= K) {
    result = mid;
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(result);
