const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const vectors = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];
const [n, m] = input[0].split(' ').map(Number);
const board = input.slice(1).map((row) => row.split(' ').map(Number));

let count = 0;
let maxBoard = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (board[i][j] === 1) {
      count++;
      maxBoard = Math.max(maxBoard, bfs(i, j));
    }
  }
}

console.log(count);
console.log(maxBoard);

function bfs(start, end) {
  const queue = [[start, end]];
  board[start][end] = 0;

  let result = 1;
  while (queue.length > 0) {
    const [x, y] = queue.shift();

    for (const [dx, dy] of vectors) {
      const nx = dx + x;
      const ny = dy + y;

      if (nx >= 0 && nx < n && ny >= 0 && ny < m && board[nx][ny] === 1) {
        board[nx][ny] = 0;
        result++;
        queue.push([nx, ny]);
      }
    }
  }

  return result;
}
