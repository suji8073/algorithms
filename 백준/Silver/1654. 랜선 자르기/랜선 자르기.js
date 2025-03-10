const fs = require('fs');
const inputFile = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const [K, N] = inputFile[0].split(' ').map(Number);
const arr = inputFile.slice(1).map(Number);

let max = Math.max(...arr);
let min = 1;

while (min <= max) {
  const mid = Math.floor((min + max) / 2);
  const sum = arr
    .map((item) => Math.floor(item / mid))
    .reduce((acc, cur) => acc + cur, 0);

  if (sum >= N) {
    min = mid + 1;
  } else {
    max = mid - 1;
  }
}

console.log(max);
