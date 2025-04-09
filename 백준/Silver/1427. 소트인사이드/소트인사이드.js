const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('').map(Number);

input.sort((a, b) => b - a);
console.log(input.join(''));
