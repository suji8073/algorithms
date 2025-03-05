const fs = require('fs');
const inputFile = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const [N, M] = inputFile[0].split(' ').map(Number);
const input = inputFile[1].split(' ').map(Number);

const array = getCombination(input, 3);

let result = 0;
array.forEach((item) => {
  const sum = item.reduce((acc, cur) => acc + cur, 0);
  if (sum <= M) {
    result = Math.max(result, sum);
  }
});

console.log(result);

function getCombination(arr, selectNum) {
  const result = [];
  if (selectNum === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombination(rest, selectNum - 1);
    const attached = combinations.map((el) => [fixed, ...el]);
    result.push(...attached);
  });
  return result;
}
