const fs = require('fs');
const arr = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(' ')
  .map(Number);

console.log(arr.reduce((acc, cur) => acc + cur ** 2, 0) % 10);