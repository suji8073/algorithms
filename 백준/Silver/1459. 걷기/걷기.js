const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim();

const [X, Y, W, S] = input.split(' ').map(Number);

const min = Math.min(X, Y);
const max = Math.max(X, Y);
const diff = max - min;

if (2 * W <= S) {
  console.log((X + Y) * W);
} else if (W >= S) {
  console.log(min * S + (diff % 2 === 0 ? diff * S : (diff - 1) * S + W));
} else {
  console.log(min * S + diff * W);
}
