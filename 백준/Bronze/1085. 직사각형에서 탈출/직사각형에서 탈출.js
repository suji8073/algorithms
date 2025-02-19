const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(' ');

const arr = [
  Math.abs(input[0] - input[2]),
  Math.abs(input[1] - input[3]),
  Math.abs(input[0]),
  Math.abs(input[1]),
];

console.log(Math.min(...arr));
