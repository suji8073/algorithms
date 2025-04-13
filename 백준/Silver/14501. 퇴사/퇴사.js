const fs = require('fs');
const [n, ...input] = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const N = Number(n);
const arr = input.map((row) => row.split(' ').map(Number));

let max = 0;
const paths = [];
backtrack(0, []);

console.log(max);

function backtrack(start) {
  if (start >= N) {
    const sum = paths.reduce((acc, cur) => acc + cur, 0);
    max = Math.max(max, sum);
    return;
  }

  for (let i = start; i < N; i++) {
    if (arr[i][0] + i <= N) {
      paths.push(arr[i][1]);
      backtrack(arr[i][0] + i);
      paths.pop(); // 백트래킹 핵심!
    } else {
      const sum = paths.reduce((acc, cur) => acc + cur, 0);
      max = Math.max(max, sum);
    }
  }
}
