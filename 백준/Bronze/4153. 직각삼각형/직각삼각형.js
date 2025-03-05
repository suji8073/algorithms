const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

for (let i = 0; i < input.length; i++) {
  const [a, b, c] = input[i]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);

  if (a === 0 && b === 0 && c === 0) {
    break;
  }

  console.log(a * a + b * b === c * c ? 'right' : 'wrong');
}
