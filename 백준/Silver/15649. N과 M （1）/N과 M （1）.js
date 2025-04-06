const fs = require('fs');
const [N, M] = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(' ').map(Number);

const arr = Array.from({ length: N }, (_, i) => i + 1);
let visited = Array(N).fill(false);

const result = [];
const selected = [];

backTracking(0);
console.log(result.join('\n'));

function backTracking(count) {
  if (count === M) {
    result.push(selected.join(' '));
    return;
  }

  arr.forEach((num, i) => {
    if (visited[i] === false) {
      visited[i] = true;
      selected.push(num);
      backTracking(count + 1);
      visited[i] = false;
      selected.pop();
    }
  });
}
