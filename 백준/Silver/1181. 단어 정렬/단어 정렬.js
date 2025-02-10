const fs = require('fs');
const inputFile = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const n = Number(inputFile[0]);
const arr = [...new Set(inputFile.slice(1))];

arr.sort((a, b) => {
  if (a.length === b.length) {
    if (a < b) return -1;
    return 0;
  }
  if (a.length < b.length) return -1;
  return 0;
});

console.log(arr.join('\n'));