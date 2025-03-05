const fs = require('fs');
const num = Number(fs.readFileSync('/dev/stdin', 'utf-8').trim());

if (num === 1) {
  console.log(666);
  return;
}

let resultArr = [666];
let index = 1;

while (true) {
  const start = Number('1'.padEnd(index, '0'));
  const end = Number('9'.repeat(index));

  getPermutations(['0'.repeat(index), '666']);

  for (let i = start; i <= end; i++) {
    const str = String(i).split('');
    const itemArr = [...str, '666'];
    getPermutations(itemArr);
  }

  resultArr = [...new Set(resultArr)].sort((a, b) => a - b);

  const len = resultArr.length;

  if (num <= len) {
    console.log(resultArr[num - 1]);
    return;
  }

  index++;
}

function getPermutations(
  arr,
  selected = [],
  visited = new Array(arr.length).fill(false)
) {
  if (selected.length === arr.length) {
    const num = selected.join('');
    if (selected[0] !== '0') {
      resultArr.push(Number(num));
    }

    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (!visited[i]) {
      visited[i] = true;
      selected.push(arr[i]);
      getPermutations(arr, selected, visited);
      selected.pop();
      visited[i] = false;
    }
  }
}
