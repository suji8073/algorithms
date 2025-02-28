const fs = require('fs');
const [A, B] = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(' ').map(Number);

const result = bfs(A, 0);
console.log(result);

function bfs(start) {
  if (start === B) return 1;
  const queue = [[start, 1]];

  while (queue.length > 0) {
    const [num, count] = queue.shift();
    const arr = [num * 2, Number(num + '1')];

    for (const nextNum of arr) {
      if (nextNum <= B) {
        if (nextNum === B) return count + 1;
        queue.push([nextNum, count + 1]);
      }
    }
  }
  return -1;
}
