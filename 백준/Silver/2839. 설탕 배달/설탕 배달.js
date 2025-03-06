const fs = require('fs');
const n = Number(fs.readFileSync('/dev/stdin', 'utf-8').trim());

let maxNum = Math.floor(n / 5);

while (true) {
  if (maxNum === 0) {
    const x = n / 3;
    console.log(x === Math.floor(x) ? x : -1);
    return;
  }

  const count = n - maxNum * 5;
  if (count % 3 === 0) {
    console.log(maxNum + count / 3);
    return;
  }

  maxNum--;
}
