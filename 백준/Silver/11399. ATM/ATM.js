const fs = require('fs');
const [N, input] = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const arr = input
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

const result = [];
arr.forEach((num, i) => {
  if (i === 0) result.push(num);
  else {
    result.push(result[result.length - 1] + num);
  }
});

console.log(result.reduce((acc, cur) => acc + cur, 0));
