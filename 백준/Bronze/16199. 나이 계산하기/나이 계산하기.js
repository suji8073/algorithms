const fs = require('fs');
const arr = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split('\n')
  .map((row) => row.split(' ').map(Number));

let year = arr[1][0] - arr[0][0];
const result = [year, year + 1, year];

if (arr[1][1] < arr[0][1]) result[0]--;
if (arr[1][1] === arr[0][1] && arr[1][2] < arr[0][2]) result[0]--;

console.log(result.join('\n'));
