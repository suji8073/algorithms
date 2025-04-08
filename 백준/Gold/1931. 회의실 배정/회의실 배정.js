const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const arr = input.slice(1).map((row) => row.split(' ').map(Number));
arr.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  return a[1] - b[1];
});

let lastEnd = 0;
let result = 0;

for (const [start, end] of arr) {
  if (start >= lastEnd) {
    lastEnd = end;
    result++;
  }
}

console.log(result);
