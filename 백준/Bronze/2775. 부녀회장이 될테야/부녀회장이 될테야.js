const fs = require('fs');
const inputFile = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const n = Number(inputFile[0]);

for (let count = 1; count < n * 2; count += 2) {
  const k = Number(inputFile[count]);
  const n = Number(inputFile[count + 1]);

  const array = [];
  let init = Array.from({ length: n }, (_, i) => i + 1);

  array.push(init);
  for (let i = 1; i <= k; i++) {
    const target = array[array.length - 1];
    const arr = [target[0]];
    for (let j = 1; j < n; j++) {
      arr.push(arr[j - 1] + target[j]);
    }
    array.push(arr);
  }
  console.log(array[k][n - 1]);
}
