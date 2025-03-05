const fs = require('fs');
const [A, B, V] = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(' ')
  .map(Number);

if (A === V) {
  console.log(1);
  return;
}

const x1 = (V - A) / (A - B) + 1;
const x2 = V / (A - B);
console.log(Math.ceil(Math.min(x1, x2)));
