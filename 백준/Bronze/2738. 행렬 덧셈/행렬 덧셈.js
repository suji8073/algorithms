const fs = require('fs');
const inputFile = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const [N, M] = inputFile[0].split(' ').map(Number);
const A = inputFile.slice(1, N + 1).map((row) => row.split(' ').map(Number));
const B = inputFile.slice(N + 1).map((row) => row.split(' ').map(Number));

const result = [];
for (let i = 0; i < N; i++) {
  const row = [];
  for (let j = 0; j < M; j++) {
    row.push(A[i][j] + B[i][j]);
  }
  result.push(row);
}

console.log(result.map((row) => row.join(' ')).join('\n'));
