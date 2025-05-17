const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const [N, M, T] = input[0].split(' ').map(Number);
const arr = input.slice(1, N + 1).map((row) => row.split(' ').map(Number));
const test = input.slice(N + 1).map((row) => row.split(' ').map(Number));

const vectors = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

let time = 0;
while (time < T) {
  const [x, d, k] = test[time++];
  for (let i = x; i <= N; i += x) {
    if (d === 0) {
      arr[i - 1] = [...arr[i - 1].slice(M - k), ...arr[i - 1].slice(0, M - k)];
    } else {
      arr[i - 1] = [...arr[i - 1].slice(k, M), ...arr[i - 1].slice(0, k)];
    }
  }

  const visited = Array.from({ length: N }, () => Array(M).fill(false));
  let zero = false;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (visited[i][j] || arr[i][j] === 0) continue;

      const result = bfs(i, j, arr[i][j]);
      if (result.length <= 1) continue;

      for (const [x, y] of result) arr[x][y] = 0;
      zero = true;
    }
  }

  if (zero) continue;

  const [count, sum] = getSum(arr);
  if (count == 0) continue;

  const num = sum / count;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (arr[i][j] === 0 || arr[i][j] === num) continue;
      arr[i][j] += arr[i][j] > num ? -1 : 1;
    }
  }

  function bfs(start, end, target) {
    const queue = [[start, end]];
    const union = [[start, end]];
    visited[start][end] = true;

    while (queue.length > 0) {
      const [x, y] = queue.shift();
      for (const [dx, dy] of vectors) {
        const nx = dx + x;
        let ny = dy + y;

        if (dx === 0) {
          if (ny < 0) ny = M - 1;
          if (ny >= M) ny = 0;
        }

        if (
          nx >= 0 &&
          nx < N &&
          ny >= 0 &&
          ny < M &&
          !visited[nx][ny] &&
          target === arr[nx][ny]
        ) {
          visited[nx][ny] = true;
          queue.push([nx, ny]);
          union.push([nx, ny]);
        }
      }
    }

    return union;
  }
}

function getSum(array) {
  let sum = 0;
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[0].length; j++) {
      if (array[i][j] === 0) continue;
      sum += array[i][j];
      count++;
    }
  }
  return [count, sum];
}

console.log(getSum(arr)[1]);
