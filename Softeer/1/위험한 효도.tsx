const fs = require('fs');
const [a, b, d] = fs
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
  .split(' ')
  .map(Number);

const time = solve(a, b, d) + solve(b, a, d);
console.log(time);

function solve(speed, wait, dist) {
  let count = 0;
  while (dist > 0) {
    if (dist - speed > 0) {
      dist -= speed;
      count += speed + wait;
    } else {
      count += dist;
      dist = 0;
    }
  }
  return count;
}
