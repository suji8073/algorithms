const fs = require('fs');
const [_, ...arr] = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split('\n')
  .map(Number);

console.log(arr.sort((a, b) => a - b).join('\n'));