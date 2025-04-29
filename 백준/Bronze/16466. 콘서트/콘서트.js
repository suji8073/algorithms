const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const N = Number(input[0]);
const arr = new Set(input[1].split(' ').map(BigInt));

let index = BigInt(1);
while (true) {
  if (!arr.has(index)) break;
  index += BigInt(1);
}

console.log(index.toString());
