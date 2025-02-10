const fs = require('fs');
const [a, b] = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split('\n')
  .map(Number);

console.log(a + b);
