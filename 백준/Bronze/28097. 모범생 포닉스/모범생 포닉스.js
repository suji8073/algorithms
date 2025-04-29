const fs = require('fs');
const [_, arr] = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const sum = arr
  .split(' ')
  .reduce((acc, cur, i) => acc + Number(cur) + (i === 0 ? 0 : 8), 0);

console.log(Math.floor(sum / 24), sum % 24);
