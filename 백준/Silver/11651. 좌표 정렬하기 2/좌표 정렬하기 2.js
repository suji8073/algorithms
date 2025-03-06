const fs = require('fs');
const [_, ...input] = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const arr = input.map((row) => row.split(' ').map(Number));
arr.sort((a, b) => a[1] - b[1] || a[0] - b[0]);

console.log(arr.map((row) => row.join(' ')).join('\n'));
