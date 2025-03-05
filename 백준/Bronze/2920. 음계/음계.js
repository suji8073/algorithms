const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(' ').map(Number);

const isAscending = input[0] === 1;
for (let i = 0; i < input.length - 1; i++) {
  const num = isAscending ? 1 : -1;
  if (input[i] + num !== input[i + 1]) {
    console.log('mixed');
    return;
  }
}

console.log(isAscending ? 'ascending' : 'descending');