const fs = require('fs');
const N = Number(fs.readFileSync('/dev/stdin', 'utf-8').trim());

if (N === 1) {
  console.log(1);
  return;
}

let sum = 1;
let index = 2;
while (true) {
  sum += (index - 1) * 6;

  if (sum >= N) {
    console.log(index);
    return;
  }

  index++;
}
