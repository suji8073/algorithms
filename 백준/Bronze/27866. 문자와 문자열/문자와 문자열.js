const fs = require('fs');
const [str, N] = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

console.log(str[Number(N) - 1]);
