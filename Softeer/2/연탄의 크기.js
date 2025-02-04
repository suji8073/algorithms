const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const n = Number(input[0]);
const arr = input[1]
  .trim()
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

let result = 0;
for (let i = 2; i <= arr[n - 1]; i++) {
  const count = arr.filter((num) => num % i === 0).length;
  result = Math.max(result, count);
}

console.log(result);
