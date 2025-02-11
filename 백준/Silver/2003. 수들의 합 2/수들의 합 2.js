const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let count = 0;
for (let i = 0; i < n; i++) {
  let sum = arr[i];
  if (sum === m) {
    count++;
    continue;
  }

  for (let j = i + 1; j < n; j++) {
    sum += arr[j];
    if (sum === m) {
      count++;
      break;
    }
  }
}

console.log(count);
