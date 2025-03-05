const fs = require('fs');
const inputFile = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const N = Number(inputFile[0]);
const arr = inputFile[1].split(' ').map(Number);
const [T, P] = inputFile[2].split(' ').map(Number);

console.log(arr.reduce((acc, cur) => acc + Math.ceil(cur / T), 0));
console.log(Math.floor(N / P), N % P);