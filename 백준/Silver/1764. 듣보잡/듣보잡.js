const fs = require('fs');
const inputFile = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const [N, _] = inputFile[0].split(' ').map(Number);

const map = new Map();
inputFile.slice(1).map((name) => map.set(name, map.has(name) ? true : false));

const result = [];
for (const [key, value] of map) {
  if (value) result.push(key);
}

console.log(result.length);
console.log(result.sort().join('\n'));
