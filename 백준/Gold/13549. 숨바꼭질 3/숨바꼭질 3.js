const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim();

const [N, K] = input.split(' ').map(Number);

const dist = Array(100000 + 1).fill(Infinity);
const queue = [[N, 0]];

let min = Number.MAX_SAFE_INTEGER;
dist[N] = 0;

while (queue.length > 0) {
  const [cur, curTime] = queue.shift();
  if (cur === K) min = Math.min(min, curTime);
  if (dist[cur] < curTime || min < curTime) continue;

  const next = [
    [cur + 1, curTime + 1],
    [cur - 1, curTime + 1],
    [2 * cur, curTime],
  ];
  for (const [nx, nt] of next) {
    if (nx >= 0 && nx <= 100000 && dist[nx] > nt) {
      dist[nx] = nt;
      queue.push([nx, nt]);
    }
  }
}

console.log(dist[K]);
