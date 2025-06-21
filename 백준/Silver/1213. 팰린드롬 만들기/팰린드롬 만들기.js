const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim();

const arr = input.split('').sort((a, b) => a.charCodeAt() - b.charCodeAt());

let index = 0;
const result = [];
const stack = [];
while (index < arr.length) {
  if (stack.length === 0) {
    stack.push(arr[index]);
    index++;
    continue;
  }

  const last = stack[stack.length - 1];
  if (last === arr[index]) {
    result.push(last);
    stack.pop();
  } else {
    stack.push(arr[index]);
  }

  index++;
}

if (stack.length > 1) {
  console.log("I'm Sorry Hansoo");
  return;
}

console.log([...result, ...stack, ...result.reverse()].join(''));
