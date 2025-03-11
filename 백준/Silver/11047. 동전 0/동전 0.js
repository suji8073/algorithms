const fs = require('fs');
const inputFile = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const [N, K] = inputFile[0].split(' ').map(Number);
const input = inputFile
  .slice(1)
  .map(Number)
  .sort((a, b) => b - a);

solution(input, K, 0);

function solution(arr, sum, count) {
  if (sum === 0) {
    console.log(count);
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= sum) {
      const num = Math.floor(sum / arr[i]);
      solution(arr.slice(i + 1), sum - num * arr[i], count + num);
      break;
    }
  }
}
