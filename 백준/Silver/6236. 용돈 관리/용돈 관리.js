const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const arr = input.slice(1).map(Number);

let left = Math.max(...arr);
let right = arr.reduce((a, b) => a + b, 0);

let result = Number.MAX_SAFE_INTEGER;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);

  let count = 1;
  let temp = 0;

  for (const num of arr) {
    if (temp + num > mid) {
      count++;
      temp = num;
    } else {
      temp += num;
    }
  }

  if (count > M) {
    left = mid + 1;
  } else {
    result = Math.min(result, mid);
    right = mid - 1;
  }
}

console.log(result);
