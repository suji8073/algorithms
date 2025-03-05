const fs = require('fs');
const [A, B, C] = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split('\n')
  .map(Number);

const array = Array(10).fill(0);

String(A * B * C)
  .split('')
  .map((char) => {
    const index = Number(char);
    array[index]++;
  });

console.log(array.join('\n'));
