const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim();

const arr = [...input].map(Number);
const sum = arr.reduce((acc, cur) => acc + cur, 0);

if (!arr.includes(0) || sum % 3 !== 0) {
  console.log(-1);
  return;
}

const num = arr.sort((a, b) => b - a).join('');
console.log(num);
