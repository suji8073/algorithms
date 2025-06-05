const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

input.shift();

while (input.length > 0) {
  const N = Number(input.shift());
  const scores = input
    .splice(0, N)
    .map((row) => row.split(' ').map(Number))
    .sort((a, b) => a[0] - b[0]);

  console.log(checkArr(scores));
}

function checkArr(arr) {
  let count = 1;
  let temp = arr[0][1];

  for (let i = 1; i < arr.length; i++) {
    const cur = arr[i][1];
    if (temp > cur) {
      count++;
      temp = cur;
    }
  }

  return count;
}
