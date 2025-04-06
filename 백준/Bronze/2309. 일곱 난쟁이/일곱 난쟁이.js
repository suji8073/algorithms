const fs = require('fs');
const inputFile = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split('\n')
  .sort((a, b) => a - b)
  .map(Number);

const totalSum = inputFile.reduce((acc, cur) => acc + cur, 0);

let result = [];
for (let i = 0; i < 9; i++) {
  for (let j = i + 1; j < 9; j++) {
    const sum = inputFile[i] + inputFile[j];
    if (totalSum - sum === 100) {
      result = inputFile.filter((_, index) => index !== i && index !== j);
      break;
    }
  }
}

console.log(result.join('\n'));
