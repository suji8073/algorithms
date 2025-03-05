const fs = require('fs');
const n = Number(fs.readFileSync('/dev/stdin', 'utf-8').trim());

let k = 1;
while (true) {
  const sum = k + k * k;

  if (n - 1 === sum) {
    console.log(k);
    return;
  }

  k++;
}
