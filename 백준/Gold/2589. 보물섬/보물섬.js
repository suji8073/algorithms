const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const vectors = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

const [N, M] = input[0].split(' ').map(Number);
const arr = input.slice(1).map((row) => row.split(''));

let result = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (arr[i][j] === 'L') {
      result = Math.max(result, bfs(i, j));
    }
  }
}

console.log(result);

function bfs(x, y) {
  const queue = [[x, y, 0]];
  const visited = Array.from({ length: N }, () => Array(M).fill(false));
  visited[x][y] = true;
  let dist = 0;

  while (queue.length > 0) {
    const [x, y, count] = queue.shift();
    dist = Math.max(dist, count);

    for (const vector of vectors) {
      const nx = x + vector[0];
      const ny = y + vector[1];

      if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
      if (arr[nx][ny] === 'L' && !visited[nx][ny]) {
        visited[nx][ny] = true;
        queue.push([nx, ny, count + 1]);
      }
    }
  }

  return dist;
}
