const fs = require('fs');
const [n, input] = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const array = input.split(' ').map(Number);

let sum = 0;
let lastNum = 0;
let lastSum = 0;

for (const num of array) {
  if (sum === 0) {
    lastNum = num;
    lastSum = 2;
    sum += lastSum;
    continue;
  }

  if (num === lastNum) lastSum *= 2;
  else lastSum = 2;

  lastNum = num;
  sum += lastSum;

  if (sum >= 100) sum = 0;
}

console.log(sum);
