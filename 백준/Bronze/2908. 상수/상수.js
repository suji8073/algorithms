const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim();

const [A, B] = input.split(' ');

const numA = Number(A.split('').reverse().join(''));
const numB = Number(B.split('').reverse().join(''));

console.log(Math.max(numA, numB))



