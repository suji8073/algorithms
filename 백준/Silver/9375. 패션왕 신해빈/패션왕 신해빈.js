const fs = require('fs');
const [T, ...input] = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

for (let i = 0; i < Number(T); i++) {
  const n = input.splice(0, 1);
  const arr = input.splice(0, n).map((row) => row.split(' '));

  const map = new Map();
  for (const [a, b] of arr) {
    map.set(b, map.has(b) ? [...map.get(b), a] : [a]);
  }

  let sum = 1;
  for (const [_, value] of map) {
    sum *= value.length + 1;
  }

  console.log(sum - 1);
}
