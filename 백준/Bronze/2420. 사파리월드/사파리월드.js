const fs = require('fs');
const [a, b] = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(' ')
  .map(Number);

console.log(Math.abs(a - b));