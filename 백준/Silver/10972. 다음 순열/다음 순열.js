const fs = require('fs');
const [n, input] = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const N = Number(n);
const numbers = Array.from({ length: N }, (_, i) => N - i);
const arr = input.split(' ').map(Number);

if (arr.every((n, i) => n === numbers[i])) {
  console.log(-1);
  return;
}

let i = N - 2;
while (arr[i] > arr[i + 1]) i--;

let j = N - 1;
while (arr[i] > arr[j]) j--;

[arr[i], arr[j]] = [arr[j], arr[i]];

let rest = arr.slice(i + 1);
rest.sort((a, b) => a - b);
let answer = [...arr.slice(0, i + 1), ...rest];
console.log(answer.join(' '));
