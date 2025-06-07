const fs = require('fs');
const { exit } = require('process');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const [N, F] = input[0].split(' ').map(Number);
const arr = Array.from({ length: N }, (_, i) => i + 1);

getPermutation(arr, N);

function getPermutation(arr, N) {
  const visited = Array(N).fill(false);
  const temp = [];

  function backTracking(depth) {
    if (depth === N) {
      if (getCalcPascal(temp) === F) {
        console.log(temp.join(' '));
        process.exit();
      }
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      if (!visited[i]) {
        visited[i] = true;
        temp.push(arr[i]);
        backTracking(depth + 1);
        visited[i] = false;
        temp.pop();
      }
    }
  }

  backTracking(0);
}

function getCalcPascal(arr) {
  while (arr.length > 1) {
    const temp = [];
    for (let i = 0; i < arr.length - 1; i++) {
      temp.push(arr[i] + arr[i + 1]);
    }
    arr = temp;
  }

  return arr[0];
}
