const fs = require('fs');
const inputFile = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const [N, M] = inputFile[0].split(' ').map(Number);
const input = inputFile.slice(1, N + 1).map((row) => row.split(' '));

const map = new Map();
input.forEach(([key, value]) => map.set(key, value));

const target = inputFile.slice(N + 1);
console.log(target.map((t) => map.get(t)).join('\n'));
