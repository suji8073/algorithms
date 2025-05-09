const fs = require('fs');
const inputFile = fs.readFileSync(0, 'utf-8').trim().split('\n');

let [N, K] = inputFile[0].split(' ').map(Number);
const arr = inputFile.slice(1).map((row) => row.split(' ').map(Number));

const dp = Array(K + 1).fill(0);

for (const [w, v] of arr) {
  for (let j = K; j >= w; j--) {
    dp[j] = Math.max(dp[j], dp[j - w] + v);
  }
}

console.log(dp[K]);
