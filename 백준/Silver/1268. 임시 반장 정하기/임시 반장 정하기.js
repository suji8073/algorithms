const fs = require('fs');
const inputFile = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const n = Number(inputFile[0]);
const arr = inputFile.slice(1).map((row) => row.split(' ').map(Number));

const result = Array.from({ length: n }, () => Array(n).fill(false));
for (let i = 0; i < n - 1; i++) {
  for (let j = i + 1; j < n; j++) {
    arr[i].map((item, index) => {
      if (item === arr[j][index]) {
          result[i][j] = true;
          result[j][i] = true;
      }
    });
  }
}

const sum = result.map((row) => row.filter((item) => item).length);
const max = Math.max(...sum);
console.log(sum.indexOf(max) + 1);
