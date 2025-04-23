const fs = require('fs');
const [n, ...arr] = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split('\n')
  .map(Number);

arr.sort((a, b) => a - b);

let result = 0;
for (let i = 1; i <= n; i++) {
  if (arr[i - 1] === i) continue;
  result += Math.abs(i - arr[i - 1]);
}

console.log(result);
