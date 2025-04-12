const fs = require('fs');
const [T, ...input] = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const vectors = [
  [-1, 0],
  [0, 1],
  [0, -1],
  [1, 0],
];

let index = 0;
for (let i = 0; i < Number(T); i++) {
  const [M, N, K] = input[index].split(' ').map(Number);
  const arr = input
    .slice(index + 1, index + 1 + K)
    .map((row) => row.split(' ').map(Number));
  index += K + 1;

  const visited = Array.from({ length: M }, () => Array(N).fill(false));
  arr.forEach(([x, y]) => (visited[x][y] = true));

  let count = 0;
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (visited[i][j] === true) {
        bfs(i, j);
        count++;
      }
    }
  }
  console.log(count);

  function bfs(start, end) {
    const queue = [[start, end]];

    while (queue.length > 0) {
      const [x, y] = queue.shift();

      for (const vector of vectors) {
        const nx = x + vector[0];
        const ny = y + vector[1];

        if (nx >= 0 && nx < M && ny >= 0 && ny < N && visited[nx][ny]) {
          visited[nx][ny] = false;
          queue.push([nx, ny]);
        }
      }
    }
  }
}
