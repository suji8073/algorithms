const fs = require('fs');
const [n, ...input] = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const arr = Array.from({ length: 100 }, () => Array(100).fill(false));

for (const row of input) {
  const [x, y] = row.split(' ').map(Number);

  for (let i = x; i < x + 10; i++) {
    for (let j = y; j < y + 10; j++) {
      arr[i][j] = true;
    }
  }
}

console.log(arr.reduce((acc, cur) => acc + cur.filter((c) => c).length, 0));
