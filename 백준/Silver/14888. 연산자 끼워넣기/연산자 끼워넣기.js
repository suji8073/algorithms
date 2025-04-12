const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const arr = input[1].split(' ').map(Number);
const [plus, minus, times, division] = input[2].split(' ').map(Number);

const str =
  '+'.repeat(plus) +
  '-'.repeat(minus) +
  '*'.repeat(times) +
  '/'.repeat(division);

const combinations = getPermutation([...str], str.length);

let min = Number.MAX_SAFE_INTEGER;
let max = Number.MIN_SAFE_INTEGER;

for (const comb of combinations) {
  let sum = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    if (comb[i] === '+') sum += arr[i + 1];
    else if (comb[i] === '-') sum -= arr[i + 1];
    else if (comb[i] === '*') sum *= arr[i + 1];
    else {
      sum =
        sum < 0 ? -Math.floor(-sum / arr[i + 1]) : Math.floor(sum / arr[i + 1]);
    }
  }

  min = Math.min(min, sum);
  max = Math.max(max, sum);
}

console.log(max === 0 ? 0 : max);
console.log(min === 0 ? 0 : min);

function getPermutation(arr, selectNum) {
  const result = [];
  const visited = Array(arr.length).fill(false);
  const temp = [];

  function backTracking(depth) {
    if (depth === selectNum) {
      result.push([...temp]);
      return;
    }

    let prev = null;
    for (let i = 0; i < arr.length; i++) {
      if (visited[i]) continue;
      if (prev === arr[i]) continue;
      prev = arr[i];

      visited[i] = true;
      temp.push(arr[i]);
      backTracking(depth + 1);

      visited[i] = false;
      temp.pop();
    }
  }

  backTracking(0);
  return result;
}
