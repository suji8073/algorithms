const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');
const vectors = [
  [0, 1],
  [0, -1],
  [-1, 0],
  [1, 0],
];

let index = 0;
let step = 1;
while (index < input.length) {
  const N = Number(input[index]);
  if (N === 0) return;
  const arr = input
    .slice(index + 1, index + N + 1)
    .map((row) => row.split(' ').map(Number));

  console.log(`Problem ${step}: ${bfs()}`);

  function bfs() {
    const dist = Array.from({ length: N }, () => Array(N).fill(Infinity));
    dist[0][0] = arr[0][0];
    const queue = [[0, 0, arr[0][0]]];

    while (queue.length > 0) {
      const [x, y] = queue.shift();
      const cost = dist[x][y];

      for (const [dx, dy] of vectors) {
        const nx = dx + x;
        const ny = dy + y;
        if (nx >= 0 && nx < N && ny >= 0 && ny < N) {
          if (dist[nx][ny] > cost + arr[nx][ny]) {
            dist[nx][ny] = cost + arr[nx][ny];
            queue.push([nx, ny]);
          }
        }
      }
    }
    return dist[N - 1][N - 1];
  }

  index += N + 1;
  step++;
}
