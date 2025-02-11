const fs = require('fs');
let input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

const newArr = [];
for (let i = n - 1; i >= 0; i--) {
  newArr.push({ index: i + 1, num: arr[i] });
}

const result = [];
for (const { index, num } of newArr) {
  const inputIndex = getFindLocation(index, num);
  result.splice(inputIndex, 0, index);
}

function getFindLocation(i, n) {
  let count = 0;
  for (const num of result) {
    if (n === count) return count;
    if (num > i) count++;
  }
  return count;
}
console.log(result.join(' '));
