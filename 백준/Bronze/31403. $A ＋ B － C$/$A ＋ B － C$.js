const fs = require('fs');
const [a, b, c] = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split('\n')
  .map(Number);

console.log(a + b - c);
console.log(Number(String(a) + String(b)) - c);