const fs = require('fs');
const arr = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n').map(Number);

const LEN = 9;
const sum = arr.reduce((acc, cur) => acc + cur, 0);

for (let i = 0; i < LEN - 1; i++) {
  for (let j = i + 1; j < LEN; j++) {
    if (sum - (arr[i] + arr[j]) === 100) {
      console.log(arr.filter((_, index) => ![i, j].includes(index)).join('\n'));
      return;
    }
  }
}
