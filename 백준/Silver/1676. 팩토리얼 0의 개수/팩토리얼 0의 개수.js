const fs = require('fs');
const num = Number(fs.readFileSync('/dev/stdin', 'utf-8').trim());

if (num === 0) {
  console.log(0);
  return;
}

let sum = 1;
let zeroCount = 0;

for (let i = 1; i <= num; i++) {
  const strSum = String(sum).split('').reverse();

  if (strSum[0] === '0') {
    const index = strSum.findIndex(
      (str, i) => i !== 0 && str !== '0' && strSum[i - 1] === '0'
    );

    const num = Number(
      strSum
        .slice(index, index + 1)
        .reverse()
        .join('')
    );

    zeroCount += index;
    sum = Number(num * i);
  } else {
    sum *= i;
  }
}

const arr = String(sum).split('').reverse();
const result = arr.findIndex((char) => char !== '0');

console.log(result + zeroCount);
