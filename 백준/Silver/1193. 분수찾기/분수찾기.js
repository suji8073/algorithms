const fs = require('fs');
const n = Number(fs.readFileSync('/dev/stdin', 'utf-8').trim());

if (n === 1) {
  console.log('1/1');
  return;
}

let sum = 0;
let level = 1;
for (let i = 1; i <= n; i++) {
  if (sum <= n && sum + i >= n) {
    level = i;
    break;
  }
  sum += i;
}

let start = level % 2 === 0 ? [1, level] : [level, 1];

while (true) {
  if (n === sum + 1) {
    console.log(start.join('/'));
    return;
  }

  if (level % 2 === 0) {
    start[0]++;
    start[1]--;
  } else {
    start[0]--;
    start[1]++;
  }
  sum++;
}
