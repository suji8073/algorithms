const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1).map(Number);

for (const num of arr) {
  const share = Math.floor(num / 5);

  let str = '++++ '.repeat(share);
  str += '|'.repeat(num - share * 5);

  console.log(str.trim());
}
