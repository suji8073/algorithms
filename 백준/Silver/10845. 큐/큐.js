const fs = require('fs');
const [n, ...inputFile] = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

let stack = [];
for (let i = 0; i < Number(n); i++) {
  const input = inputFile[i];

  if (input.includes('push')) {
    const [_, num] = input.split(' ');
    stack.push(Number(num));
    continue;
  }

  if (input === 'front' || input === 'back' || input === 'pop') {
    if (stack.length === 0) {
      console.log(-1);
      continue;
    }

    if (input === 'front') console.log(stack[0]);
    else if (input === 'back') console.log(stack[stack.length - 1]);
    else console.log(stack.shift());
  }

  if (input === 'size') console.log(stack.length);
  else if (input === 'empty') console.log(stack.length === 0 ? 1 : 0);
}
