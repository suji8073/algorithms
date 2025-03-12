const fs = require('fs');
const X = Number(fs.readFileSync('/dev/stdin', 'utf-8').trim());

const dp = Array(X).fill(0);
dp[1] = 0;
dp[2] = 1;

for (let i = 3; i <= X; i++) {
  if (i % 2 === 0 && i % 3 === 0) {
    dp[i] = Math.min(dp[i - 1], dp[i / 3], dp[i / 2]) + 1;
    continue;
  }
  if (i % 2 === 0) {
    dp[i] = Math.min(dp[i - 1], dp[i / 2]) + 1;
    continue;
  }

  if (i % 3 === 0) {
    dp[i] = Math.min(dp[i - 1], dp[i / 3]) + 1;
    continue;
  }

  dp[i] = dp[i - 1] + 1;
}
console.log(dp[X]);
