const fs = require('fs');
const inputFile = fs
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
  .split('\n')
  .map(Number);
const [n, ...input] = inputFile;

for (let num of input) {
  console.log(
    ('++++ '.repeat(Math.floor(num / 5)) + '|'.repeat(num % 5)).trim()
  );
}
