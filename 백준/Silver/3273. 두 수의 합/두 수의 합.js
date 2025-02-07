const fs = require('fs');
let inputFile = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const n = Number(inputFile[0]);
const arr = inputFile[1].split(' ').map(Number);
const target = Number(inputFile[2]);

let result = 0;
for (let i = 0; i < n - 1; i++) {
  for (let j = i + 1; j < n; j++) {
    if (arr[i] + arr[j] === target) result++;
  }
}
console.log(result);
