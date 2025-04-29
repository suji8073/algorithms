const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim();
const N = Number(input);

const arr = Array(N + 1).fill(0);
arr[1] = 1;
arr[2] = 3;

for (let i = 3; i <= N; i++) {
  arr[i] = (arr[i - 1] + arr[i - 2] * 2) % 10007;
}

console.log(arr[N]);
