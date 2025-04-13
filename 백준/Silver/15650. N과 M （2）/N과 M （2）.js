const fs = require('fs');
const [N, M] = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(' ').map(Number);

const arr = Array.from({ length: N }, (_, i) => i + 1);

const result = getCombination(arr, M);
console.log(result.map((row) => row.join(' ')).join('\n'));

function getCombination(arr, selectNum) {
  const result = [];
  if (selectNum === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combination = getCombination(rest, selectNum - 1);
    const attached = combination.map((el) => [fixed, ...el]);
    result.push(...attached);
  });

  return result;
}
