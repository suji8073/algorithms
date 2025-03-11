const fs = require('fs');
const inputFile = fs.readFileSync('/dev/stdin', 'utf-8').trim();

console.log(inputFile);
