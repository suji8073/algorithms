const fs = require('fs');
const inputFile = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const testCases = Number(inputFile[0]);
const arr = inputFile.slice(1).map((row) => row.trim().split(' ').map(Number));

for (const [n, m] of arr) {
  console.log(getCombination(m, n));
}

function getCombination(m, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result = (result * (m - i)) / (i + 1);
  }
  return result;
}

