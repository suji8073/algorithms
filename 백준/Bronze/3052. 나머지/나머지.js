const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n').map(Number);

const arr = input.map((num) => num % 42);
console.log([...new Set(arr)].length);
