const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim();
const N = Number(input);

const arr = Array(N+1).fill(Number.MAX_SAFE_INTEGER);
arr[0] = 0;

for (let i = 1; i <= N; i++) {
  for (let j = 1; j * j <= i; j++) {
    arr[i] = Math.min(arr[i], arr[i - j * j] + 1);
  }
}

console.log(arr[N]);
