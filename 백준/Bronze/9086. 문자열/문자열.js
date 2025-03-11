const fs = require('fs');
const [T, ...input] = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

input.forEach((str) => console.log(str[0] + str[str.length - 1]));
