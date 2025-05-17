const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const vectors = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

const [R, C, T] = input[0].split(' ').map(Number);
const arr = input.slice(1).map((row) => row.split(' ').map(Number));

let time = 0;
while (time < T) {
  const minus = [];
  const union = [];

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (arr[i][j] === -1) {
        minus.push(i);
      } else if (arr[i][j] !== 0) {
        union.push([i, j]);
      }
    }
  }

  const dist = Array.from({ length: R }, () => Array(C).fill(0));
  for (const [x, y] of union) {
    const cur = Math.floor(arr[x][y] / 5);

    let count = 0;
    for (const [dx, dy] of vectors) {
      const nx = dx + x;
      const ny = dy + y;
      if (nx >= 0 && nx < R && ny >= 0 && ny < C && arr[nx][ny] !== -1) {
        count++;
        dist[nx][ny] += cur;
      }
    }

    dist[x][y] -= cur * count;
  }

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      arr[i][j] += dist[i][j];
    }
  }

  let target = 0;
  const [top, bottom] = minus;

  for (let i = 1; i < C; i++) {
    const temp = arr[top][i];
    arr[top][i] = target;
    target = temp;
  }

  for (let i = top - 1; i >= 0; i--) {
    const temp = arr[i][C - 1];
    arr[i][C - 1] = target;
    target = temp;
  }

  for (let i = C - 2; i >= 0; i--) {
    const temp = arr[0][i];
    arr[0][i] = target;
    target = temp;
  }

  for (let i = 1; i < top; i++) {
    const temp = arr[i][0];
    arr[i][0] = target;
    target = temp;
  }

  target = 0;
  for (let i = 1; i < C; i++) {
    const temp = arr[bottom][i];
    arr[bottom][i] = target;
    target = temp;
  }

  for (let i = bottom + 1; i < R; i++) {
    const temp = arr[i][C - 1];
    arr[i][C - 1] = target;
    target = temp;
  }

  for (let i = C - 2; i >= 0; i--) {
    const temp = arr[R - 1][i];
    arr[R - 1][i] = target;
    target = temp;
  }

  for (let i = R - 2; i > bottom; i--) {
    const temp = arr[i][0];
    arr[i][0] = target;
    target = temp;
  }

  time++;
}

const sum = arr.reduce(
  (acc, cur) => acc + cur.reduce((a, c) => a + (c === -1 ? 0 : c), 0),
  0
);

console.log(sum);
