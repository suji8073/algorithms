const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const [xLen, yLen] = input[0].split(' ').map(Number);
const rangeArr = input.slice(-2);

const array = input
  .slice(1, xLen + 1)
  .map((row) => row.split(' ').filter((num) => +num === 1).length);

console.log(solve(array, rangeArr));

function solve(arr, ranges) {
  ranges.map((range) => {
    const [start, end] = range.split(' ').map(Number);

    for (let i = start - 1; i < end; i++) {
      if (arr[i] > 0) arr[i]--;
    }
  });
  return arr.reduce((acc, cur) => acc + cur, 0);
}
