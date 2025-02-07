const fs = require('fs');
let inputFile = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const n = Number(inputFile[0]);
const arr = inputFile
  .slice(1)
  .map(Number)
  .sort((a, b) => a - b);

console.log(arr.join('\n'))