const fs = require('fs');
const inputFile = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const N = Number(inputFile[0]);
const arr = inputFile.slice(1).map((row) => row.split(' ').map(Number));

const map = [];
for (let i = 0; i < N; i++) {
  const [x, y] = arr[i];
  let count = 0;
  for (let j = 0; j < N; j++) {
    if (i !== j) {
      const [p, q] = arr[j];

      if (x < p && y < q) {
        count++;
      }
    }
  }
  map.push([i, count + 1]);
}

console.log(map.map((v) => v[1]).join(' '));
