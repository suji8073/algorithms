const fs = require('fs');
let inputFile = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const arr = inputFile[1].split(' ').map(Number);

const map = new Map();
for (const num of arr) {
  map.set(num, map.has(num) ? map.get(num) + 1 : 1);
}

const key = [...map.keys()].sort((a, b) => a - b);

const targetArr = inputFile[3].split(' ').map(Number);

const result = targetArr.map((target) => binarySearch(target)).join('\n');
console.log(result);

function binarySearch(num) {
  let left = 0;
  let right = key.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (key[mid] === num) {
      return map.get(num);
    }

    if (key[mid] > num) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return 0;
}
