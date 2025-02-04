const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

console.log(input[2].includes(input[1]) ? 'secret' : 'normal');
