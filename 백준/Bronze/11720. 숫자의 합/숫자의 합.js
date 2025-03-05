const fs = require('fs');
const [_, str] = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const sum = str
  .split('')
  .map(Number)
  .reduce((acc, cur) => acc + cur, 0);

console.log(sum);