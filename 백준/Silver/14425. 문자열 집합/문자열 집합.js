const fs = require('fs');
const stdin = fs.readFileSync(0).toString().trim();
const input = stdin.split('\n');

const [N, M] = input[0].split(' ').map(Number);
const hash = new Set();
input.slice(1, 1 + N).map(str => hash.add(str));

console.log(input.slice(1 + N).filter(str => hash.has(str)).length)
