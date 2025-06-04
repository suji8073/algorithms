const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);
const bag1 = input[1].split(' ').map(Number);
const bag2 = input[2].split(' ').map(Number);

const prefix1 = new Array(N + 1).fill(0);
for (let i = 1; i <= N; i++) {
  prefix1[i] = prefix1[i - 1] + bag1[i - 1];
}

const prefix2 = new Array(N + 1).fill(0);
for (let i = 1; i <= N; i++) {
  prefix2[i] = prefix2[i - 1] + bag2[i - 1];
}

let result = Number.MAX_SAFE_INTEGER;

for (let i = 0; i <= K; i++) {
  const sum1 = prefix1[N - i];
  const sum2 = prefix2[N - (K - i)];

  const maxTime = Math.max(sum1, sum2);

  if (maxTime < result) {
    result = maxTime;
  }
}

console.log(result);
