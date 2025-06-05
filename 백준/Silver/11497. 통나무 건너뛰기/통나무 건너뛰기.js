const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

input.shift();

while (input.length > 0) {
  const N = Number(input.shift());
  const arr = input
    .shift()
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);

  const visited = Array(N).fill(false);
  const newArr = [];
  for (let i = 0; i < N; i += 2) {
    newArr.push(arr[i]);
    visited[i] = true;
  }

  for (let i = N - 1; i >= 0; i--) {
    if (!visited[i]) {
      newArr.push(arr[i]);
    }
  }

  let result = Math.abs(newArr[0] - newArr[N - 1]);
  for (let i = 1; i < N; i++) {
    result = Math.max(result, Math.abs(newArr[i] - newArr[i - 1]));
  }
  console.log(result);
}
