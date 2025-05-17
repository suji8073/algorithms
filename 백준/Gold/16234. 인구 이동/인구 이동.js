const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const vectors = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

const [N, L, R] = input[0].split(' ').map(Number);
const arr = input.slice(1).map((row) => row.split(' ').map(Number));

let result = 0;
while (true) {
  let moved = false;
  const visited = Array.from({ length: N }, () => Array(N).fill(false));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j]) {
        const union = bfs(i, j);

        const len = union.length;
        if (len <= 1) continue;

        const sum = union.reduce((acc, [x, y]) => acc + arr[x][y], 0);
        const avg = Math.floor(sum / len);

        for (const [x, y] of union) {
          arr[x][y] = avg;
        }
        moved = true;
      }
    }
  }

  if (!moved) break;
  result++;

  function bfs(start, end) {
    const queue = [[start, end]];
    const union = [[start, end]];
    visited[start][end] = true;

    while (queue.length > 0) {
      const [x, y] = queue.shift();

      for (const [dx, dy] of vectors) {
        const nx = dx + x;
        const ny = dy + y;
        if (nx >= 0 && nx < N && ny >= 0 && ny < N && !visited[nx][ny]) {
          const calc = Math.abs(arr[nx][ny] - arr[x][y]);
          if (calc >= L && calc <= R) {
            visited[nx][ny] = true;
            queue.push([nx, ny]);
            union.push([nx, ny]);
          }
        }
      }
    }

    return union;
  }
}

console.log(result);
