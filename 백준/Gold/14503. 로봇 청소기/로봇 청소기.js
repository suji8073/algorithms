const fs = require('fs');
const inputFile = fs.readFileSync(0, 'utf-8').trim().split('\n');

const vectors = [
  [-1, 0], // 북
  [0, 1], // 동
  [1, 0], // 남
  [0, -1], // 서
];

const [N, M] = inputFile[0].split(' ').map(Number);
const [r, c, d] = inputFile[1].split(' ').map(Number);

const arr = inputFile.slice(2).map((row) => row.split(' ').map(Number));
let vector = d;
let result = 0;

dfs(r, c);
console.log(result);

function dfs(x, y) {
  if (arr[x][y] === 0) {
    result++;
    arr[x][y] = 2;
  }

  for (let i = 0; i < vectors.length; i++) {
    vector = (vector + 3) % 4;
    const nx = x + vectors[vector][0];
    const ny = y + vectors[vector][1];

    if (nx >= 0 && nx < N && ny >= 0 && ny < M && arr[nx][ny] === 0) {
      dfs(nx, ny);
      return;
    }
  }

  const back = (vector + 2) % 4;
  const bx = x + vectors[back][0];
  const by = y + vectors[back][1];
  if (bx >= 0 && bx < N && by >= 0 && by < M && arr[bx][by] !== 1) {
    dfs(bx, by);
  }
}
