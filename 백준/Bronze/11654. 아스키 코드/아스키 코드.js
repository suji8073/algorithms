const fs = require('fs');
const n = fs.readFileSync('/dev/stdin', 'utf-8').trim();

console.log(n.charCodeAt());
