const fs = require('fs');
const arr = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split('\n')
  .map((row) => row.split(' ').map(Number));

for (const [a, b, c] of arr) {
  if (a === 0 && b === 0 && c === 0) {
    return;
  }

  if (b - a === c - b) {
    console.log('AP', c + (b - a));
    continue;
  }

  console.log('GP', c * (b / a));
}
