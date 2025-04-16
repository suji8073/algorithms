const fs = require('fs');
const arr = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(' ').map(Number);

let first = arr[0];
if (first !== 1 && first !== 8 && Math.abs(arr[1] - first) !== 1) {
  console.log('mixed');
  return;
}

let isAscending = arr[1] - first;

for (let i = 1; i < arr.length; i++) {
  if (arr[i] !== first + isAscending) {
    console.log('mixed');
    return;
  }
  first = arr[i];
}

console.log(isAscending === 1 ? 'ascending' : 'descending');
