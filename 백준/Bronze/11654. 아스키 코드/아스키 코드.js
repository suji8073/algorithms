const fs = require('fs');
const str = fs.readFileSync('/dev/stdin', 'utf-8').trim();

console.log(str.charCodeAt());
