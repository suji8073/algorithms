const fs = require('fs');
let arr = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(' ').map(Number);

console.log(arr[0] / arr[1]);