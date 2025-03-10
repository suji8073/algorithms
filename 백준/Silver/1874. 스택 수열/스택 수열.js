const fs = require('fs');
const [n, ...arr] = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split('\n')
  .map(Number);

const result = [];
const stack = [];

let targetNum = 1;
let index = 0;

while (index < n) {
  const target = stack[stack.length - 1];
  if (target === arr[index]) {
    stack.pop();
    result.push('-');
    index++;
  } else {
    stack.push(targetNum);
    result.push('+');
    targetNum++;
  }

  if (targetNum > n + 1) {
    console.log('NO');
    return;
  }
}

console.log(result.join('\n'));
