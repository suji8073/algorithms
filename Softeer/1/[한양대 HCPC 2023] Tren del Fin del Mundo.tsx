const fs = require('fs');
const inputFile = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const [n, ...input] = inputFile;
console.log(solve(n, input));

function solve(count, arr) {
  let location = [0, Number.MAX_SAFE_INTEGER];
  for (const point of arr) {
    const [a, b] = point.split(' ');
    if (+b <= location[1]) {
      location = [+a, +b];
    }
  }
  return location.join(' ');
}
