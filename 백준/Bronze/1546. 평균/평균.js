const fs = require('fs');
const [n, input] = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const arr = input.split(' ').map(Number);
const M = Math.max(...arr);

const result = arr.reduce((acc, cur) => acc + (cur / M) * 100, 0) / n;
if (result === Math.floor(result)) {
  console.log(result.toFixed(1));
} else {
  console.log(result);
}
