const fs = require('fs');
const [_, input] = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const arr = input.split(' ').map(Number);
console.log(Math.min(...arr), Math.max(...arr));
