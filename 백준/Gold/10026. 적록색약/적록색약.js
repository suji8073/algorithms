const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const vectors = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

const N = Number(input[0]);
let map = input.slice(1).map((row) => row.split(''));

const count = [0, 0];
let visited = Array.from({ length: N }, () => Array(N).fill(false));

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited[i][j]) {
      count[0]++;
      dfs(i, j, map[i][j]);
    }
  }
}

visited = Array.from({ length: N }, () => Array(N).fill(false));
map = map.map((row) => row.map((item) => (item === 'R' ? 'G' : item)));

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited[i][j]) {
      count[1]++;
      dfs(i, j, map[i][j]);
    }
  }
}

console.log(count.join(' '));

function dfs(x, y, color) {
  visited[x][y] = true;
  for (const vector of vectors) {
    const nx = x + vector[0];
    const ny = y + vector[1];

    if (
      nx >= 0 &&
      nx < N &&
      ny >= 0 &&
      ny < N &&
      map[nx][ny] === color &&
      !visited[nx][ny]
    ) {
      dfs(nx, ny, color);
    }
  }
}
