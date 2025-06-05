const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const map = new Map();
for (const item of input[1].split(' ')) {
  const num = Number(item);
  map.set(num, map.has(num) ? map.get(num) + 1 : 1);
}

const arr = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
const result = [];
for (const [num, count] of arr) {
  for (let i = 0; i < count; i++) {
    result.push(num);
  }
}

console.log(result.join(' '));
