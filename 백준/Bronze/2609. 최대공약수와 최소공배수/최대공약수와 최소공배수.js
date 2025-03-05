const fs = require('fs');
const [a, b] = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(' ').map(Number);

let result = 0;
for (let i = 1; i <= Math.min(a, b); i++) {
  if (a % i === 0 && b % i === 0) {
    result = i;
  }
}

console.log(result);
console.log(result * (a / result) * (b / result));
