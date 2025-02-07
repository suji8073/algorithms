const fs = require('fs');
let input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const vectors = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

input = input.slice(1);
while (input.length > 0) {
  const [m, n, k] = input[0].split(' ').map(Number);
  const array = input.slice(1, k + 1).map((row) => row.split(' ').map(Number));

  const graph = Array.from({ length: n }, () => Array(m).fill(0));
  for (const [x, y] of array) {
    graph[y][x] = 1;
  }

  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (graph[i][j] === 1) {
        dfs(i, j);
        count++;
      }
    }
  }

  function dfs(x, y) {
    if (x < 0 || x >= n || y < 0 || y >= m) return;
    if (graph[x][y] === 0) return;

    graph[x][y] = 0;

    for (const vector of vectors) {
      const nx = x + vector[0];
      const ny = y + vector[1];

      if (nx >= 0 && nx < n && ny >= 0 && ny < m && graph[nx][ny] === 1) {
        dfs(nx, ny);
      }
    }
  }

  console.log(count);

  input = input.slice(k + 1);
}
