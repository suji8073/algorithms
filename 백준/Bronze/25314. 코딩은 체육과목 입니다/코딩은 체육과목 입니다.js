const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim();

const N = Number(input);
console.log(`${'long '.repeat(N / 4)}int`);