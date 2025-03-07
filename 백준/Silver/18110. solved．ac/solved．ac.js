const fs = require('fs');
const inputFile = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const n = Number(inputFile[0]);
if (n === 0) {
  console.log(0);
  return;
}

const num = Math.round(n * 0.15);
const arr = inputFile
  .slice(1)
  .map(Number)
  .sort((a, b) => a - b);

console.log(
  Math.round(
    arr.slice(num, n - num).reduce((acc, cur) => acc + cur, 0) / (n - 2 * num)
  )
);
