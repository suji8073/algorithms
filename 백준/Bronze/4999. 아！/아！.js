const fs = require('fs');
const [a, b] = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

console.log(a.length >= b.length ? 'go' : 'no');