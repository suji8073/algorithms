const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const init = ['(', ')', '[', ']'];
const map = new Map([
  [')', '('],
  [']', '['],
]);

for (let i = 0; i < input.length; i++) {
  const str = input[i];
  if (str === '.') {
    break;
  }

  const arr = str.split('').filter((char) => init.includes(char));

  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    const char = arr[i];

    if (i !== 0 && map.has(char) && map.get(char) === stack[stack.length - 1]) {
      stack.pop();
      continue;
    }

    stack.push(char);
  }

  console.log(stack.length === 0 ? 'yes' : 'no');
}
