const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const arr = input.slice(1).map((row) => row.split(' ').map(Number));

const vectors = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

let queue = [];

for (let i = 0; i < N; i++) {
  queue.push([i, 0]);
  queue.push([i, M - 1]);
}

for (let j = 0; j < M; j++) {
  queue.push([0, j]);
  queue.push([N - 1, j]);
}

let time = 0;
let lastCount = 0;

while (true) {
  const temp = [];
  const visited = Array.from({ length: N }, () => Array(M).fill(false));

  while (queue.length > 0) {
    const [x, y] = queue.shift();

    for (const [dx, dy] of vectors) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx >= 0 && nx < N && ny >= 0 && ny < M && !visited[nx][ny]) {
        visited[nx][ny] = true;
        if (arr[nx][ny] === 1) temp.push([nx, ny]);
        else queue.push([nx, ny]);
      }
    }
  }

  if (temp.length === 0) break;
  for (const [x, y] of temp) {
    arr[x][y] = 0;
  }
  queue = temp;

  lastCount = temp.length;
  time++;
}

console.log(time);
console.log(lastCount);
