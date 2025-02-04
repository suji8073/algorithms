const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
  .split('\n')
  .map((row) => row.trim().split(' ').map(Number));

const N = 3;
let result = N + 1;

for (let i = 0; i < N; i++) {
  const col = input.map((row) => row[i]);
  const rowCost = getCost([...new Set(input[i])]);
  const colCost = getCost([...new Set(col)]);

  if (rowCost === 0 || colCost === 0) {
    result = 0;
    break;
  }

  result = Math.min(result, rowCost, colCost);
}

console.log(result);

function getCost(arr) {
  const len = arr.length;

  if (len === 1) return 0;
  if (len === 2) return Math.abs(arr[0] - arr[1]);

  arr.sort((a, b) => a - b);
  return arr[2] - arr[0] + arr[1] - arr[0];
}
