const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const vectors = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];
const [N, M] = input[0].split(' ').map(Number);
const arr = input.slice(1).map((row) => row.split(' ').map(Number));

const zeroArr = [];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (arr[i][j] === 0) {
      zeroArr.push([i, j]);
    }
  }
}

function getCombination(arr, selectNum) {
  const result = [];
  if (selectNum === 1) return arr.map((row) => [row]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combination = getCombination(rest, selectNum - 1);
    const attached = combination.map((row) => [fixed, ...row]);
    result.push(...attached);
  });

  return result;
}

let result = 0;
for (const comb of getCombination(zeroArr, 3)) {
  const map = arr.map((row) => [...row]);
  comb.forEach(([i, j]) => (map[i][j] = 1));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (map[i][j] === 2) {
        dfs(i, j);
      }
    }
  }

  let count = 0;
  map.map((row) => row.map((item) => (count += item === 0 ? 1 : 0)));

  function dfs(x, y) {
    for (const vector of vectors) {
      const nx = vector[0] + x;
      const ny = vector[1] + y;

      if (nx >= 0 && nx < N && ny >= 0 && ny < M && map[nx][ny] === 0) {
        map[nx][ny] = 2;
        dfs(nx, ny);
      }
    }
  }

  result = Math.max(result, count);
}
console.log(result);
