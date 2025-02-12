const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const n = Number(input[0]);
const arr = input.splice(1).map((row) => row.split(' ').map(Number));

for (let i = 0; i < n; i++) {
  const [x1, y1, r1, x2, y2, r2] = arr[i];

  const d = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  if (d === 0 && r1 === r2) {
    console.log(-1);
  } else if (d > r1 + r2 || d < Math.abs(r1 - r2)) {
    console.log(0);
  } else if (d === r1 + r2 || d === Math.abs(r1 - r2)) {
    console.log(1);
  } else {
    console.log(2);
  }
}
