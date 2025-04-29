const fs = require('fs');
const [A, B] = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(' ').map(BigInt);

console.log((A + B).toString());
