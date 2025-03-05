const fs = require('fs');
const [N, K] = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(' ').map(Number);

const init = Array.from({ length: N }, (_, i) => i + 1);

let parent = 1;
let child = 1;
for (let i = 0; i < K; i++) {
  child *= init[i];
  parent *= init[N - i - 1];
}

console.log(parent / child);
