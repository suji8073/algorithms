const fs = require('fs');
let inputFile = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const [n, m] = inputFile[0].split(' ').map(Number);
const input = inputFile.slice(1).map((row) => row.split(' ').map(Number));

const vectors = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const countArr = [];
let zeroCount = 0;
for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    const num = input[i][j];
    if (num === 1) {
      countArr.push([i, j, 1]);
    } else if (num === 0) {
      zeroCount++;
    }
  }
}

if (zeroCount === 0) {
  console.log(0);
  return;
}

console.log(bfs(countArr));

function bfs(queue) {
  let index = 0;
   

  while (index < queue.length) {
    const [x, y, count] = queue[index];
    index++;

    for (const vector of vectors) {
      const nx = x + vector[0];
      const ny = y + vector[1];

      if (nx >= 0 && nx < m && ny >= 0 && ny < n && input[nx][ny] === 0) {
        input[nx][ny] = 1;
        queue.push([nx, ny, count + 1]);
        zeroCount--;

        if (zeroCount === 0) {
          return count;
        }
      }
    }
  }
  return -1;
}
