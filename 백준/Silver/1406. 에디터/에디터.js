const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const left = input[0].split('');
const right = [];

const arr = input.slice(2).map((row) => row.split(' '));

for (const [calc, str] of arr) {
  if (calc === 'L' && left.length !== 0) right.push(left.pop());
  if (calc === 'D' && right.length !== 0) left.push(right.pop());
  if (calc === 'B' && left.length !== 0) left.pop();
  if (calc === 'P') left.push(str);
}

console.log(left.concat(right.reverse()).join(''));
