const fs = require('fs');
const inputFile = fs.readFileSync('/dev/stdin', 'utf-8').trim();

if (inputFile === 'F') {
  console.log('0.0');
  return;
}

const charArr = ['D', 'C', 'B', 'A'];
const numArr = new Map([
  ['+', 1.3],
  ['0', 1.0],
  ['-', 0.7],
]);

const num =
  Number(charArr.findIndex((c) => c === inputFile[0])) +
  numArr.get(inputFile[1]);
console.log(num.toFixed(1));
