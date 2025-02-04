const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('');

solve();

function solve() {
  const map = new Map([
    ['(', ')'],
    [')', '('],
  ]);

  let result = '';
  const stack = [];

  for (const str of input) {
    const len = stack.length;
    if (len !== 0 && map.get(str) === stack[len - 1]) {
      result += str === '(' ? '+' : '1';
      stack.pop();
    }
    stack.push(str);
    result += str;
  }

  console.log(result);
}
