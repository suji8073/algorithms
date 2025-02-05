const fs = require('fs');
const [K, P, N] = fs
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
  .split(' ')
  .map((n) => BigInt(n));

let sum = K;
for (let i = 0; i < N; i++) {
  sum = (sum * P) % BigInt(1000000007);
}

console.log(sum.toString());
