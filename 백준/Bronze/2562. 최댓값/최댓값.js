const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n').map(Number);

let maxNum = 0;
let index = -1;
for (let i = 0; i < input.length; i++) {
  if (maxNum < input[i]) {
    maxNum = input[i];
    index = i;
  }
}

console.log(maxNum);
console.log(index + 1);
