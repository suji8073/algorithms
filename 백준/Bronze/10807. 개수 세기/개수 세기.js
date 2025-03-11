const fs = require('fs');
const inputFile = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const arr = inputFile[1].split(' ').map(Number);
const v = Number(inputFile[2]);

console.log(arr.filter((n) => n === v).length);
