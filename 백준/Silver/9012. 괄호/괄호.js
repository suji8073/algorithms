const fs = require('fs');
const [n, ...input] = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const map = new Map([[')', '(']]);

for (let i = 0; i < Number(n); i++) {
  const str = input[i].split('');

  let stack = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (i !== 0 && map.has(char) && map.get(char) === stack[stack.length - 1]) {
      stack.pop();
      continue;
    }

    stack.push(char);
  }

  console.log(stack.length === 0 ? 'YES' : 'NO');
}
