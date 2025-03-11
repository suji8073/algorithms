const fs = require('fs');
const inputFile = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const [N, _] = inputFile[0].split(' ').map(Number);
const input = inputFile.slice(1, N + 1);

const map = new Map();
input.forEach((name, i) => map.set(name, i + 1));

const result = inputFile
  .slice(N + 1)
  .map((str) => (!isNaN(str) ? input[Number(str) - 1] : map.get(str)));

console.log(result.join('\n'));
