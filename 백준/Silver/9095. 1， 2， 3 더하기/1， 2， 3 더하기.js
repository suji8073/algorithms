const fs = require('fs');
const [T, ...arr] = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split('\n')
  .map(Number);

const init = [1, 2, 3];

arr.forEach((target) => {
  let result = 0;
  init.forEach((i) => dfs(i, target));
  console.log(result);

  function dfs(num, sum) {
    if (num === sum) {
      result++;
      return;
    }

    init.forEach((i) => {
      if (i + num <= sum) {
        dfs(i + num, sum);
      }
    });
  }
});
