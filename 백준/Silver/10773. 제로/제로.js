const fs = require('fs');
const [n, ...input] = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const arr = input.map(Number);

const stack = [];
for (let i = 0; i < Number(n); i++) {
  arr[i] === 0 ? stack.pop() : stack.push(arr[i]);
}

console.log(stack.reduce((acc, cur) => acc + cur, 0));
