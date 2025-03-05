const fs = require('fs');
const inputFile = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const N = Number(inputFile[0]);
const arr = inputFile[1].split(' ').map(Number);

console.log(arr.filter((item) => check(item)).length);

function check(num) {
  if (num === 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
