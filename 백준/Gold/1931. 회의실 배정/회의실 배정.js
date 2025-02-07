const fs = require('fs');
const inputFile = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const n = Number(inputFile[0]);
const arr = inputFile.slice(1).map((row) => row.split(' ').map(Number));

arr.sort((prev, cur) => {
  if (prev[1] === cur[1]) {
    if (prev[0] > cur[0]) return 1;
    return -1;
  }
  if (prev[1] > cur[1]) return 1;
  return -1;
});

let count = 0;
let lastTime = 0;

for (const [start, end] of arr) {
  if (lastTime <= start && lastTime <= end) {
    lastTime = end;
    count++;
  }
}

console.log(count);
