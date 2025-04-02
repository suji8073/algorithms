const fs = require('fs');
const inputFile = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const N = Number(inputFile[0]);
const array = inputFile[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

const test = inputFile[3].split(' ').map(Number);

const result = [];

test.forEach((target) => {
  let left = 0;
  let right = N - 1;

  while (true) {
    if (left > right) {
      result.push(0);
      break;
    }

    const mid = Math.floor((left + right) / 2);
    const num = array[mid];

    if (num === target) {
      result.push(1);
      break;
    }

    if (num < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
});

console.log(result.join(' '));
