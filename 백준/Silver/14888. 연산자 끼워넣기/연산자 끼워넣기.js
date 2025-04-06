const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split('\n')
  .map((row) => row.split(' ').map(Number));

const [N, arr, operator] = input;

const first = arr.shift();
const calc = [];
operator.map((num, idx) => {
  for (let i = 0; i < num; i++) {
    calc.push(idx);
  }
});

const visited = Array(N - 1).fill(false);
const select = [];

let min = Number.MAX_SAFE_INTEGER;
let max = Number.MIN_SAFE_INTEGER;

backTracking(0);

console.log(max ? max : 0);
console.log(min ? min : 0);

function backTracking(depth) {
  if (depth === N - 1) {
    let sum = first;
    for (let i = 0; i < arr.length; i++) {
      switch (select[i]) {
        case 0:
          sum += arr[i];
          break;
        case 1:
          sum -= arr[i];
          break;
        case 2:
          sum *= arr[i];
          break;
        case 3:
          sum = sum < 0 ? -Math.floor(-sum / arr[i]) : Math.floor(sum / arr[i]);
          break;
      }
    }

    min = Math.min(sum, min);
    max = Math.max(sum, max);
    return;
  }

  let prev = null;
  for (let i = 0; i < calc.length; i++) {
    if (visited[i]) continue;
    if (calc[i] === prev) continue;
    prev = calc[i];

    visited[i] = true;
    select.push(calc[i]);
    backTracking(depth + 1);

    visited[i] = false;
    select.pop();
  }
}
