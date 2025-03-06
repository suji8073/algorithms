const fs = require('fs');
const [n, ...inputFile] = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const role = ['top', 'size', 'empty', 'pop'];

let stack = [];
for (let i = 0; i < Number(n); i++) {
  const input = inputFile[i];

  if (!role.includes(input)) {
    const [_, num] = input.split(' ');
    stack.push(Number(num));
    continue;
  }

  if (input === 'top' || input === 'pop') {
    if (stack.length === 0) {
      console.log(-1);
      continue;
    }
    console.log(input === 'top' ? stack[stack.length - 1] : stack.pop());
    continue;
  }

  if (input === 'size') console.log(stack.length);
  else if (input === 'empty') console.log(stack.length === 0 ? 1 : 0);
}
