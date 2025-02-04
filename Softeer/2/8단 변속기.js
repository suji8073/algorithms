const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
  .split(' ')
  .map(Number);

solve(input);

function solve(arr) {
  const first = arr[0];

  if (first !== 1 && first !== 8) {
    console.log('mixed');
    return;
  }

  const gap = first === 1 ? 1 : -1;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + gap !== arr[i + 1]) {
      console.log('mixed');
      return;
    }
  }

  console.log(gap === 1 ? 'ascending' : 'descending');
}
