const fs = require('fs');
const [T, ...input] = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

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
        count++;
        dfs(i, j);
      }
    }
  }

  console.log(count);

  function dfs(start, end) {
    if (start < 0 || start >= M || end < 0 || end >= N || !visited[start][end])
      return;

    visited[start][end] = false;
    dfs(start - 1, end);
    dfs(start + 1, end);
    dfs(start, end - 1);
    dfs(start, end + 1);
  }
}
