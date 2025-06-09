const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const S = input[0].split('');
const T = input[1].split('');

backTracking(T);
console.log(0);

function backTracking(arr) {
  if (arr.length === S.length) {
    if (arr.join('') === input[0]) {
      console.log(1);
      process.exit();
    }
    return;
  }

  if (arr[arr.length - 1] === 'A') {
    backTracking(arr.slice(0, arr.length - 1));
  }
  if (arr[0] === 'B') {
    backTracking(arr.slice(1).reverse());
  }
}
