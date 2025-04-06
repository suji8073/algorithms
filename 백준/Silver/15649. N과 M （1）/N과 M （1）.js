const fs = require('fs');
const [N, M] = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(' ').map(Number);
const arr = Array.from({ length: N }, (_, i) => i + 1);

const result = getCombination(arr, M);
console.log(result.map((row) => row.join(' ')).join('\n'));

function getCombination(array, selectNum) {
  const result = [];
  if (selectNum === 1) return array.map((el) => [el]);
  array.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const combinations = getCombination(rest, selectNum - 1);
    const num = combinations.map((el) => [fixed, ...el]);
    result.push(...num);
  });
  return result;
}
