const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const n = Number(input[0]);
if (n % 2 === 1) {
  console.log(1);
  return;
}

const arr = input.splice(1).map((row) => row.split(' ').map(Number));
const subArr = arr.map(([a, b]) => a - b).sort((a, b) => a - b);

const min = subArr[Math.floor(subArr.length / 2) - 1];
const max = subArr[Math.floor(subArr.length / 2)];

console.log(max - min + 1);