const fs = require('fs');
const [x, y] = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const target1 = Array(26).fill(0);
const target2 = Array(26).fill(0);

[...x].map((c) => target1[c.charCodeAt() - 97]++);
[...y].map((c) => target2[c.charCodeAt() - 97]++);

let result = 0;
for (let i = 0; i < 26; i++) {
  result += Math.abs(target1[i] - target2[i]);
}

console.log(result);
