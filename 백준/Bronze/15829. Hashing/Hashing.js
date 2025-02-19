const fs = require('fs');
const [n, input] = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const arr = input.split('').map((char) => char.charCodeAt() - 97 + 1);

let sum = 0;
for (let i = 0; i < n; i++) {
  const num = 31 ** i * arr[i];
  sum += num;
}
console.log(sum);
