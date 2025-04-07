const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const arr = input.slice(1).map((row) => row.split('').map((v) => v === '1'));

const vectors = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

bfs();

function bfs() {
  const queue = [[0, 0, 1]];
  arr[0][0] = false;

  while (queue.length > 0) {
    const [x, y, count] = queue.shift();

    if (x === N - 1 && y === M - 1) {
      console.log(count);
      return;
    }

    for (const vector of vectors) {
      const nx = x + vector[0];
      const ny = y + vector[1];

      if (nx >= 0 && nx <= N - 1 && ny >= 0 && ny <= M - 1 && arr[nx][ny]) {
        arr[nx][ny] = false;
        queue.push([nx, ny, count + 1]);
      }
    }
  }
}
