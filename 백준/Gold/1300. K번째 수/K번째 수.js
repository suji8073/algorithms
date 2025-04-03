const fs = require('fs');
const [N, k] = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split('\n')
  .map(Number);

let left = 1;
let right = N * N;
let answer = right;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);

  let count = 0;
  for (let i = 1; i <= N; i++) {
    count += Math.min(Math.floor(mid / i), N);
  }

  if (count >= k) {
    answer = mid;
    right = mid - 1;
  } else {
    left = mid + 1;
  }
}

console.log(answer);
