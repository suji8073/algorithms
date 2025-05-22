const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const arr = input[1].split(' ').map(Number);

const sortedSet = [...new Set(arr)].sort((a, b) => a - b);

const map = new Map();
sortedSet.forEach((s, i) => map.set(s, i));

console.log(arr.map((num) => map.get(num)).join(' '));
