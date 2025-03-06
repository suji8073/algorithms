const fs = require('fs');
const n = Number(fs.readFileSync('/dev/stdin', 'utf-8').trim());

if (n === 1) {
  console.log(1);
  return;
}

let arr = Array.from({ length: n }, (_, i) => i + 1);
let index = 0;

while (index <= arr.length) {
  if (index === arr.length - 1) {
    console.log(arr[index - 1]);
    return;
  }

  const moveNum = arr[index + 1];
  index += 2;
  arr.push(moveNum);
}
