const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(' ').map(Number);

const init = [1, 1, 2, 2, 2, 8];
console.log(input.map((num, i) => init[i] - num).join(' '));