const fs = require('fs');
const inputFile = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const N = Number(inputFile[0]);
const arr = inputFile[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const target = inputFile[3].split(' ').map(Number);

const result = target.map((num) => solution(num)).join('\n');
console.log(result);

function solution(number) {
  let leftIndex = 0;
  let rightIndex = N - 1;

  while (leftIndex <= rightIndex) {
    const mid = Math.floor((leftIndex + rightIndex) / 2);
    if (arr[mid] === number) return 1;
    if (arr[mid] > number) {
      rightIndex = mid - 1;
    } else {
      leftIndex = mid + 1;
    }
  }
  return 0;
}
