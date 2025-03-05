const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const findIndex = input.findIndex((str) => !isNaN(str));
let index = findIndex === -1 ? 1 : input[findIndex] - findIndex;

while (true) {
  const str = getString(index);
  if (str !== input[0]) {
    index++;
    continue;
  }

  if (getString(index + 1) === input[1] && getString(index + 2) === input[2]) {
    console.log(getString(index + 3));
    return;
  }
  index++;
}

function getString(num) {
  if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
  if (num % 3 === 0) return 'Fizz';
  if (num % 5 === 0) return 'Buzz';
  return String(num);
}
