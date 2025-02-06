const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const N = Number(input[0]);
const arr = input.slice(2).map((row) => row.split(' '));

const init = Array(N).fill(false);

const map = new Map();
for (const item of arr) {
  const [a, b] = item.map(Number);
  map.set(a, map.has(a) ? [b, ...map.get(a)] : [b]);
  map.set(b, map.has(b) ? [a, ...map.get(b)] : [a]);
}

bfs();
const count = init.filter((v) => v).length - 1;
console.log(count);

function bfs() {
  const queue = [1];
  init[0] = true;

  while (queue.length > 0) {
    const num = queue.shift();

    if (map.has(num)) {
      const values = map.get(num);
      for (const value of values) {
        if (!init[value - 1]) {
          init[value - 1] = true;
          queue.push(value);
        }
      }
    }
  }
}
