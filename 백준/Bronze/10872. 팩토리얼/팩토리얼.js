const fs = require('fs');
const n = Number(fs.readFileSync('/dev/stdin', 'utf-8').trim());

if (n === 0) {
  console.log(1);
  return;
}

let sum = 1;
for (let i = 1; i <= n; i++) {
  sum *= i;
}

console.log(sum);
