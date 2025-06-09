const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const N = Number(input[0]);
const dots = input.slice(1).map((row) => row.split(' ').map(Number));

let result = 0;
for (let i = 0; i < N - 2; i++) {
  for (let j = i + 1; j < N - 1; j++) {
    for (let k = j + 1; k < N; k++) {
      const [x1, y1] = dots[i];
      const [x2, y2] = dots[j];
      const [x3, y3] = dots[k];

      const dot1 = (x2 - x1) * (x3 - x1) + (y2 - y1) * (y3 - y1);
      const dot2 = (x1 - x2) * (x3 - x2) + (y1 - y2) * (y3 - y2);
      const dot3 = (x1 - x3) * (x2 - x3) + (y1 - y3) * (y2 - y3);

      if (dot1 === 0 || dot2 === 0 || dot3 === 0) result++;
    }
  }
}

console.log(result);
