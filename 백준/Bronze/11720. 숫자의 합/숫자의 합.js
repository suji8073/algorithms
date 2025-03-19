const fs = require('fs');
const inputFile = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const arr = inputFile[1].split('').map(Number);
console.log(arr.reduce((acc, cur) => acc + cur, 0));
