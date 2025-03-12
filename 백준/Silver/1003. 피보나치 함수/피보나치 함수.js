const fs = require('fs');
const [T, ...arr] = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split('\n')
  .map(Number);

for (let i = 0; i < T; i++) {
  const num = arr[i];

  let min = [1, 0];
  let max = [0, 1];

  if (num === 0 || num === 1) {
    console.log((num === 0 ? min : max).join(' '));
    continue;
  }

  for (let i = 2; i <= num; i++) {
    const result = [min[0] + max[0], min[1] + max[1]];
    if (i === num) {
      console.log(result.join(' '));

      break;
    }
    min = max;
    max = result;
  }
}
