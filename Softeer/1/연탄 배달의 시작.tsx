const fs = require('fs');
const [n, input] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const array = input.split(' ').map(Number);
solve(array);

function solve(arr) {
  const len = arr.length;
  let answer = [Number.MAX_SAFE_INTEGER, 0];
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      const num = arr[j] - arr[i];
      if (num < answer[0]) answer = [num, 1];
      else if (num === answer[0]) answer[1]++;
    }
  }
  console.log(answer[1]);
}
