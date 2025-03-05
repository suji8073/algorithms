const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(' ').map(Number);

const map = new Map([
  [1, 500],
  [2, 800],
  [3, 1000],
]);

const sum = input.reduce((acc, cur) => acc + map.get(cur), 0);
console.log(5000 - sum);
