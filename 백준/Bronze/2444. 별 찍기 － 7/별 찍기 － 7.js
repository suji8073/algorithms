const fs = require('fs');
const input = Number(fs.readFileSync(0, 'utf-8').trim());

const xLen = 2 * (input - 1) + 1;
const yLen = 2 * input - 1;

const arr = Array.from({ length: yLen }, () => Array(xLen).fill(' '));

for (let i = 0; i < input; i++) {
  const num = 2 * i + 1;
  const index = (yLen - num) / 2;
  for (let j = index; j < index + num; j++) {
    arr[i][j] = '*';
    arr[xLen - i - 1][j] = '*';
  }
}

console.log(arr.map((row) => row.join('').trimEnd()).join('\n'));
