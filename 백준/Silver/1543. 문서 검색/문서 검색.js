const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const str = input[0];
const target = input[1];

console.log(str.split(target).length - 1);
