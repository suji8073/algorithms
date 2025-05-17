const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const vectors = [
  [-1, 0], // 0
  [-1, 1], // 1
  [0, 1], // 2
  [1, 1], // 3
  [1, 0], // 4
  [1, -1], // 5
  [0, -1], // 6
  [-1, -1] // 7
];

const [N, M, K] = input[0].split(' ').map(Number);
let fire = input.slice(1).map((row) => row.split(' ').map(Number));

let count = 0;
while (count < K) {
  count++;
  const map = new Map();
  for (const [r, c, m, s, d] of fire) {
    const [dx, dy] = vectors[d];
    let nx = (r - 1 + dx * s + N * s) % N;
    let ny = (c - 1 + dy * s + N * s) % N;

    const key = `${nx},${ny}`;
    map.set(key, map.has(key) ? [...map.get(key), [m, s, d]] : [[m, s, d]]);
  }

  fire = [];
  for (const [key, balls] of map) {
    const [x, y] = key.split(',').map(Number);

    if (balls.length === 1) {
      const [m, s, d] = balls[0];
      fire.push([x + 1, y + 1, m, s, d]);
      continue;
    }

    let sumM = 0;
    let sumS = 0;
    let odd = 0
    let even = 0;

    for (const [m, s, d] of balls) {
      sumM += m;
      sumS += s;
      if (d % 2 === 0) even++;
      else odd++;
    }

    const newM = Math.floor(sumM / 5);
    if (newM === 0) continue;

    const newS = Math.floor(sumS / balls.length);
    const dirs = odd === 0 || even === 0 ? [0, 2, 4, 6] : [1, 3, 5, 7];

    for (const d of dirs) {
      fire.push([x + 1, y + 1, newM, newS, d]);
    }
  }
}

console.log(fire.reduce((acc, cur) => acc + cur[2], 0));
