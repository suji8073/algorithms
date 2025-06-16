const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const vectors = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

const [N, M, T] = input[0].split(' ').map(Number);
const map = input.slice(1).map((row) => row.split(' ').map(Number));

bfs();

function bfs() {
  const queue = [[0, 0, 0, 0]];
  let visited = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => [false, false])
  );

  visited[0][0][0] = true;

  while (queue.length > 0) {
    const [x, y, count, key] = queue.shift();
    if (count > T) continue;
    if (x === N - 1 && y === M - 1) {
      console.log(count);
      return;
    }

    for (const [dx, dy] of vectors) {
      const nx = dx + x;
      const ny = dy + y;

      if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
      if (visited[nx][ny][key]) continue;

      const target = map[nx][ny];

      if (target === 0) {
        queue.push([nx, ny, count + 1, key]);
        visited[nx][ny][key] = true;
      } else if (target === 2) {
        queue.push([nx, ny, count + 1, 1]);
        visited[nx][ny][1] = true;
      } else if (key === 1 && target === 1) {
        queue.push([nx, ny, count + 1, key]);
        visited[nx][ny][key] = true;
      }
    }
  }

  console.log('Fail');
}
