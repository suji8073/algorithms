const fs = require('fs');
const [row, ...input] = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const [N, M] = row.split(' ').map(Number);
const arr = input.map((row) => row.split(''));

const init1 = ['W', 'B'];
const init2 = ['B', 'W'];

const board1 = Array.from({ length: N }, () => Array(M).fill(false));
const board2 = Array.from({ length: N }, () => Array(M).fill(false));

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    const index = (i + j) % 2;
    const target = arr[i][j];

    if (init1[index] !== target) board1[i][j] = true;
    if (init2[index] !== target) board2[i][j] = true;
  }
}

let min = N * M;

getMinCount(board1);
getMinCount(board2);

console.log(min);

function getMinCount(array) {
  for (let i = 0; i <= N - 8; i++) {
    const sliceArr = array.slice(i, i + 8);
    for (let j = 0; j <= M - 8; j++) {
      const result = sliceArr.map((row) => row.slice(j, j + 8));
      min = Math.min(min, findRePaint(result));
    }
  }
}

function findRePaint(array) {
  let count = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (array[i][j]) count++;
    }
  }
  return count;
}
