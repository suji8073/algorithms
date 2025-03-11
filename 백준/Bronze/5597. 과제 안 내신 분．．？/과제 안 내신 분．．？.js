const fs = require('fs');
const arr = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n').map(Number);

const init = Array.from({ length: 30 }, (_, i) => i + 1);
arr.forEach((n) => (init[n - 1] = false));

console.log(init.filter((i) => i).join('\n'));
