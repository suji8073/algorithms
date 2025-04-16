const fs = require('fs');
const [N, K] = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(' ').map(Number);

const visited = Array(100000).fill(false);

bfs();

function bfs() {
  const queue = [[N, 0]];
  visited[N] = true;

  while (queue.length > 0) {
    const [start, count] = queue.shift();

    if (start === K) {
      console.log(count);
      return;
    }

    const next = [start * 2, start + 1, start - 1];
    for (const value of next) {
      if (value >= 0 && value <= 100000 && !visited[value]) {
        visited[value] = true;
        queue.push([value, count + 1]);
      }
    }
  }
}
