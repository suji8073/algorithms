const fs = require('fs');
const inputFile = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

let arr = inputFile[0].split(' ').map(Number);
const min = Number(inputFile[1]);

arr[1] += min;
const calcPlusHour = Math.floor(arr[1] / 60);

if (calcPlusHour > 0) {
  arr[0] += calcPlusHour;
  arr[1] %= calcPlusHour * 60;
}

if (arr[0] >= 24) {
  arr[0] %= 24;
}

console.log(arr.join(' '));
