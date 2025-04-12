const fs = require('fs');
const [N, K] = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(' ').map(Number);

const MIN = 0;
const MAX = 100000;

const visited = Array(MAX).fill(false);

bfs();

function bfs() {
  const queue = [[N, 0]];
  visited[N] = true;

  while (queue.length >= 0) {
    const [location, count] = queue.shift();

    if (location === K) {
      console.log(count);
      return;
    }

    const numbers = [location + 1, location - 1, location * 2];
    numbers.forEach((num) => {
      if (num >= MIN && num <= MAX && !visited[num]) {
        visited[num] = true;
        queue.push([num, count + 1]);
      }
    });
  }
}
