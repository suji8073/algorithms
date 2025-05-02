const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const arr = input.slice(1).map((row) => row.split(''));

let count = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (arr[i][j] === 'I') {
      dfs(i, j);
      break;
    }
  }
}

console.log(count === 0 ? 'TT' : count);

function dfs(x, y) {
  if (arr[x][y] === 'X') return;
  if (arr[x][y] === 'P') count++;
  arr[x][y] = 'X';

  const next = [
    [x + 1, y],
    [x, y + 1],
    [x - 1, y],
    [x, y - 1],
  ];

  for (const [nx, ny] of next) {
    if (nx >= 0 && nx < N && ny >= 0 && ny < M && arr[nx][ny] !== 'X') {
      dfs(nx, ny);
    }
  }
}
