const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim();
const str = input.split('');

const stack = [];
let result = 0;

for (let i = 0; i < str.length; i++) {
  const char = str[i];
  if (char === '(') {
    stack.push('(');
    continue;
  }

  stack.pop();
  result += str[i - 1] === '(' ? stack.length : 1;
}

console.log(result);
