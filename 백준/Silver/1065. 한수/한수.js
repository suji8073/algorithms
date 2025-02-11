const fs = require('fs');
const n = Number(fs.readFileSync('/dev/stdin', 'utf-8').trim());

if (n <= 99) {
  console.log(n);
  return;
}

let count = 99;
for (let i = 100; i <= n; i++) {
  const str = [...String(i)];
  const len = str.length;

  const num1 = str[1] - str[0];
  const num2 = str[2] - str[1];
  if (len === 3 && num1 === num2) {
    count++;
    continue;
  }

  const num3 = str[3] - str[2];
  if (len === 4 && num1 === num2 && num2 === num3 && num1 === num3) {
    count++;
  }
}
console.log(count);
