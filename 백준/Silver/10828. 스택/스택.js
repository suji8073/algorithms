const fs = require('fs');
const [n, ...arr] = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const stack = [];
const result = [];

for (let i = 0; i < Number(n); i++) {
  const str = arr[i];

  if (str === 'top') {
    result.push(stack[stack.length - 1] ?? -1);
  } else if (str === 'size') {
    result.push(stack.length);
  } else if (str === 'empty') {
    result.push(stack.length === 0 ? 1 : 0);
  } else if (str === 'pop') {
    result.push(stack.length === 0 ? -1 : stack.pop());
  } else {
    const num = Number(str.split(' ')[1]);
    stack.push(num);
  }
}

console.log(result.join('\n'));
