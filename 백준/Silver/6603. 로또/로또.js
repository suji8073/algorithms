const fs = require('fs');
const inputFile = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');
let index = 0;

while (true) {
  const [k, ...arr] = inputFile[index].split(' ').map(Number);
  if (k === 0) return;

  arr.sort((a, b) => a - b);
  const result = getCombinations(arr, 6);

  console.log(
    (index === 0 ? '' : '\n') + result.map((row) => row.join(' ')).join('\n')
  );
  index++;
}

function getCombinations(arr, selectNum) {
  const result = [];
  if (selectNum === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combination = getCombinations(rest, selectNum - 1);
    const attached = combination.map((el) => [fixed, ...el]);
    result.push(...attached);
  });

  return result;
}
