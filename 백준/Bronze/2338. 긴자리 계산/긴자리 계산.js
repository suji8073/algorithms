const fs = require('fs');
const [a, b] = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split('\n')
  .map((n) => BigInt(n));

console.log((a + b).toString());
console.log((a - b).toString());
console.log((a * b).toString());