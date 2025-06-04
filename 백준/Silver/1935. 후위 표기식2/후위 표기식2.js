const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const numArr = input.slice(2).map(Number);
const stack = [];

for (const str of input[1].split('')) {
  const idx = str.charCodeAt() - 65;

  if (idx >= 0 && idx <= 25) {
    stack.push(numArr[idx]);
    continue;
  }

  const first = stack.pop();
  const second = stack.pop();

  if (str === '*') stack.push(first * second);
  if (str === '+') stack.push(first + second);
  if (str === '/') stack.push(second / first);
  if (str === '-') stack.push(second - first);
}

console.log(stack[0].toFixed(2));
