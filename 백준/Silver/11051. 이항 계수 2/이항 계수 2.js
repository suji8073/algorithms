const fs = require('fs');
const [N, K] = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(' ').map(Number);

const array = Array.from({ length: N + 1 }, () => Array(K + 1).fill(0));
array[1][0] = 1;
array[1][1] = 1;

for (let i = 2; i <= N; i++) {
  for (let j = 0; j <= K; j++) {
    if (j === 0 || i === j) array[i][j] = 1;
    else {
      array[i][j] = (array[i - 1][j - 1] + array[i - 1][j]) % 10007;
    }
  }
}

console.log(array[N][K]);
