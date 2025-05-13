const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let count = 0;
for (const row of input.slice(1)) {
  const stack = [];
  for (const str of [...row]) {
    if (stack.length > 0 && stack[stack.length - 1] === str) {
      stack.pop();
      continue;
    }
    stack.push(str);
  }
  if (stack.length === 0) count++;
}

console.log(count);
