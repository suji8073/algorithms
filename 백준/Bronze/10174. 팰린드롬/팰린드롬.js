const fs = require('fs');
const [n, ...input] = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

for (let i = 0; i < Number(n); i++) {
  const str = input[i].toUpperCase().trim();
  const newStr = str.split('').reverse().join('');
  console.log(str.includes(newStr) ? 'Yes' : 'No');
}