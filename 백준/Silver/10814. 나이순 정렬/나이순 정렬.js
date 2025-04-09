const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const arr = input.slice(1).map((row) => row.split(' '));

arr.sort((a, b) => +a[0] - +b[0]);
console.log(arr.map((row) => row.join(' ')).join('\n'));
