const fs = require('fs');
const level = Number(fs.readFileSync('/dev/stdin', 'utf8').trim());

solve(level);

function solve(n) {
  let dot_line = 2;
  for (let i = 0; i < n; i++) {
    dot_line += dot_line - 1;
  }
  console.log(dot_line ** 2);
}
