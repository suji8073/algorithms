const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim();

const arr = input.split('');
const stack = [];

for (const str of arr) {
  if (stack.length === 0) {
    stack.push(str);
    continue;
  }

  const last = stack[stack.length - 1];

  if (str === ')' && last === '(') {
    stack.pop();
    stack.push(2);
  } else if (str === ']' && last === '[') {
    stack.pop();
    stack.push(3);
  } else if (Number.isInteger(last) && stack.length >= 2) {
    if (stack[stack.length - 2] === '(' && str === ')') {
      stack.pop();
      stack.pop();
      stack.push(2 * last);
    } else if (stack[stack.length - 2] === '[' && str === ']') {
      stack.pop();
      stack.pop();
      stack.push(3 * last);
    } else {
      stack.push(str);
    }
  } else {
    stack.push(str);
  }

  while (true) {
    if (
      Number.isInteger(stack[stack.length - 2]) &&
      Number.isInteger(stack[stack.length - 1])
    ) {
      const num = stack[stack.length - 2] + stack[stack.length - 1];
      stack.pop();
      stack.pop();
      stack.push(num);
    } else {
      break;
    }
  }
}

console.log(stack.length === 1 && Number.isInteger(stack[0]) ? stack[0] : 0);
