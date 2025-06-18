const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim();

let K = Number(input);

let size = 1;
while (size < K) {
  size *= 2;
}

let count = 0;
let target = size;
while (K > 0) {
  if (K < target) {
    target /= 2;
    count++;
  } else {
    K -= target;
  }
}

console.log(size, count);
