const fs = require('fs');
const inputFile = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

let index = 0;
while (true) {
  const [w, h] = inputFile[index].split(' ').map(Number);
  if (w === 0 && h === 0) return;
  index++;

  const arr = inputFile
    .slice(index, index + h)
    .map((row) => row.split(' ').map(Number));

  let count = 0;
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (arr[i][j] === 1) {
        dfs(i, j);
        count++;
      }
    }
  }

  function dfs(x, y) {
    if (x < 0 || x >= h || y < 0 || y >= w) return;

    if (arr[x][y] === 0) return;

    arr[x][y] = 0;

    dfs(x - 1, y);
    dfs(x + 1, y);
    dfs(x, y - 1);
    dfs(x, y + 1);
    dfs(x - 1, y - 1);
    dfs(x + 1, y + 1);
    dfs(x - 1, y + 1);
    dfs(x + 1, y - 1);
  }

  console.log(count);
  index += h;
}
