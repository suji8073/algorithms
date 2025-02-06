const fs = require('fs');
const inputFile = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const N = Number(inputFile[0]);
const input = inputFile
  .slice(1)
  .map((row) => row.trim().split(' ').map(Number));

input.sort((a, b) => a[1] - b[1]);

let lastTime = 0;
let count = 0;

for (const [start, end] of input) {
  if (start >= lastTime) {
    count++;
    lastTime = end;
  }
}

console.log(count);
