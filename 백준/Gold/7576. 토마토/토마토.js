const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const vectors = [
  [0, -1],
  [0, 1],
  [-1, 0],
  [1, 0],
];

const [M, N] = input[0].split(' ').map(Number);
const array = input.slice(1).map((row) => row.split(' ').map(Number));

const visited = [];
const queue = [];

let sum = 0;

for (let i = 0; i < N; i++) {
  const row = [];
  for (let j = 0; j < M; j++) {
    if (array[i][j] === 0) {
      sum++;
      row.push(false);
      continue;
    }

    row.push(true);
    if (array[i][j] === 1) queue.push([i, j, 0]);
  }
  visited.push(row);
}

let result = -1;

bfs();

console.log(result);

function bfs() {
  let index = 0;
  while (index < queue.length) {
    const [x, y, count] = queue[index++];

    if (sum === 0) {
      result = Math.max(result, count);
    }

    for (const [dx, dy] of vectors) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx >= 0 && nx < N && ny >= 0 && ny < M && !visited[nx][ny]) {
        visited[nx][ny] = true;
        sum--;
        queue.push([nx, ny, count + 1]);
      }
    }
  }
}
