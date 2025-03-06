const fs = require('fs');
const [N, K] = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(' ').map(Number);

const visited = Array(N).fill(false);

let arr = [];
let index = 0;
let count = 0;

while (arr.length <= N) {
  if (arr.length === N) {
    console.log('<' + arr.join(', ') + '>');
    return;
  }

  if (!visited[index]) {
    count++;
    if (count === K) {
      visited[index] = true;
      arr.push(index + 1);
      count = 0;
    }
  }
  index = (index + 1) % N;
}
