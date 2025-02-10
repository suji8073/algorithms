const fs = require('fs');
const arr = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split('\n')
  .map((row) => row.split(' ').map(Number));

let min = Number.MAX_SAFE_INTEGER;
for (let i = 0; i < arr[0].length; i++) {
  min = Math.min(arr[0][i] / arr[1][i], min);
}

const result = [];
for (let i = 0; i < arr[0].length; i++) {
  const num = arr[0][i] - arr[1][i] * min;
  result.push(Number.isInteger(num) ? num : num.toFixed(6));
}

console.log(result.join(' '));
