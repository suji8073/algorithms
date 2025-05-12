const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const arr = input.slice(1).map((row) => row.split('').map(Number));

const visited = Array.from({ length: N }, () =>
  Array.from({ length: M }, () => [false, false])
);

const vectors = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

bfs();

function bfs() {
  const queue = [[0, 0, 1, 0]];
  let index = 0;

  while (index < queue.length) {
    const [x, y, count, broken] = queue[index];
    index++;

    if (x === N - 1 && y === M - 1) {
      console.log(count);
      return;
    }

    for (const vector of vectors) {
      const nx = x + vector[0];
      const ny = y + vector[1];

      if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;

      if (broken === 0 && arr[nx][ny] === 1 && !visited[nx][ny][1]) {
        visited[nx][ny][1] = true;
        queue.push([nx, ny, count + 1, 1]);
      }

      if (arr[nx][ny] === 0 && !visited[nx][ny][broken]) {
        visited[nx][ny][broken] = true;
        queue.push([nx, ny, count + 1, broken]);
      }
    }
  }
  console.log(-1);
}
