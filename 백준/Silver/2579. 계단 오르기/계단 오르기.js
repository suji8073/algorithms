const fs = require('fs');
const [N, ...arr] = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split('\n')
  .map(Number);

const dp = new Array(N).fill(false);

dp[0] = arr[0];
dp[1] = arr[0] + arr[1];
dp[2] = Math.max(arr[0], arr[1]) + arr[2];

for (let i = 3; i <= N; i++) {
  dp[i] = Math.max(dp[i - 3] + arr[i - 1], dp[i - 2]) + arr[i];
}

console.log(dp[N - 1]);
