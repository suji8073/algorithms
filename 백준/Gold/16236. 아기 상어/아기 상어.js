const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const N = Number(input[0]);
const arr = input.slice(1).map((row) => row.split(' ').map(Number));

const vectors = [
  [0, -1],
  [0, 1],
  [1, 0],
  [-1, 0],
];

let location = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (arr[i][j] === 9) {
      location = [i, j];
      break;
    }
  }
}

let size = 2;
let eat = 0;
let result = 0;

while (true) {
  const target = findTarget();
  if (target === null) break;

  const [tx, ty, dist] = target;
  result += dist;
  eat++;
  if (eat === size) {
    size++;
    eat = 0;
  }
  arr[location[0]][location[1]] = 0;
  location = [tx, ty];
  arr[tx][ty] = 0;
}

console.log(result);

function findTarget() {
  const visited = Array.from({ length: N }, () => Array(N).fill(false));
  const queue = [[...location, 0]];
  visited[location[0]][location[1]] = true;

  const candidates = [];

  while (queue.length > 0) {
    const [x, y, count] = queue.shift();

    for (const [dx, dy] of vectors) {
      const nx = dx + x;
      const ny = dy + y;

      if (nx < 0 || ny < 0 || nx >= N || ny >= N) continue;
      if (visited[nx][ny] || arr[nx][ny] > size) continue;

      visited[nx][ny] = true;

      if (arr[nx][ny] > 0 && arr[nx][ny] < size) {
        candidates.push([nx, ny, count + 1]);
      }
      queue.push([nx, ny, count + 1]);
    }
  }

  candidates.sort((a, b) => {
    if (a[2] !== b[2]) return a[2] - b[2];
    if (a[0] !== b[0]) return a[0] - b[0];
    return a[1] - b[1];
  });

  return candidates[0] || null;
}
