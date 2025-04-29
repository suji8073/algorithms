const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim();

const arr = 'SciComLove'.split('');
const N = Number(input) % arr.length;

console.log(arr.slice(N).concat(arr.slice(0, N)).join(''));
