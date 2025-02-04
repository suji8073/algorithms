const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1).map((row) => row.trim().split(' '));

const result = arr
  .map(([str1, str2]) => {
    const index = str1.split('').findIndex((s) => s === 'x' || s === 'X');
    return str2[index].toUpperCase();
  })
  .join('');

console.log(result);
