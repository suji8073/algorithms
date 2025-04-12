const fs = require('fs');
const [row, ...input] = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');
const [R, C] = row.split(' ').map(Number);

const vectors = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const arr = input.map((row) => row.split('').map((c) => c.charCodeAt() - 65));
const visited = Array(26).fill(false);
let max = 0;

dfs(0, 0, 1);
console.log(max);

function dfs(x, y, count) {
  visited[arr[x][y]] = true;
  max = Math.max(max, count);

  for (const vector of vectors) {
    const nx = x + vector[0];
    const ny = y + vector[1];

    if (nx >= 0 && ny >= 0 && nx < R && ny < C && !visited[arr[nx][ny]]) {
      dfs(nx, ny, count + 1);
    }
  }
  visited[arr[x][y]] = false;
}
