const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim();

const numArr = input.match(/[0-9]+/g).map(Number);
const calcArr = input.match(/[-|+]/g);

if (calcArr === null || !calcArr.includes('-')) {
  console.log(numArr.reduce((acc, cur) => acc + cur, 0));
  return;
}

let lastIndex = 0;
let result = [];

for (let i = 0; i < calcArr.length; i++) {
  if (calcArr[i] === '-') {
    const sum = numArr
      .slice(lastIndex, i + 1)
      .reduce((acc, cur) => acc + cur, 0);
    result.push(sum);

    lastIndex = i + 1;
  }
}

result.push(
  numArr.slice(lastIndex, numArr.length).reduce((acc, cur) => acc + cur, 0)
);

console.log(result.reduce((acc, cur, i) => acc + cur * (i !== 0 ? -1 : 1)));
