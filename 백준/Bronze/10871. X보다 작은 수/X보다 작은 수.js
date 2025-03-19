const fs = require('fs');
const inputFile = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const [_, X] = inputFile[0].split(' ').map(Number);
const arr = inputFile[1].split(' ').map(Number);

console.log(arr.filter((n) => n < X).join(' '));