const fs = require('fs');
let arr = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(' ').map(v => BigInt(v));

console.log((arr[0] / arr[1]).toString());
console.log((arr[0] % arr[1]).toString());