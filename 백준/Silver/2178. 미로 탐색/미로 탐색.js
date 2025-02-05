const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const arr = input.slice(1).map((row) => row.split('').map((n) => n === '1'));

const vectors = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];

bfs();

function bfs() {
  const queue = [[0, 0, 1]];
  arr[0][0] = false;

  while (queue.length > 0) {
    const [x, y, count] = queue.shift();

    if (x === N - 1 && y === M - 1) {
      console.log(count);
      break;
    }

    for (const vector of vectors) {
      const tx = vector[0] + x;
      const ty = vector[1] + y;

      if (tx >= 0 && tx < N && ty >= 0 && ty < M && arr[tx][ty]) {
        queue.push([tx, ty, count + 1]);
        arr[tx][ty] = false;
      }
    }
  }
}
