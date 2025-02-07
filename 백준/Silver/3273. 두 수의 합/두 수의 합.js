const fs = require('fs');
let inputFile = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const n = Number(inputFile[0]);
const arr = inputFile[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const k = Number(inputFile[2]);

function getCount() {
  let count = 0;
  let left = 0;
  let right = n - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === k) {
      count++;
      left++;
      right--;
    } else if (sum > k) {
      right--;
    } else {
        left++;
    }
  }
  return count;
}

console.log(getCount());
