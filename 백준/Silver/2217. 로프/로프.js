const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const N = Number(input[0]);
const arr = input
  .slice(1)
  .map(Number)
  .sort((a, b) => a - b);

let result = 0;
for (let i = 0; i < N; i++) {
  result = Math.max(result, arr[i] * (N - i));
}

console.log(result);
