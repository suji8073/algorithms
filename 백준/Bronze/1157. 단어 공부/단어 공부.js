const fs = require('fs');
const str = fs.readFileSync(0, 'utf-8').trim();

const map = new Map();
for (const char of str) {
  const charUpper = char.toUpperCase();
  map.set(charUpper, map.has(charUpper) ? map.get(charUpper) + 1 : 1);
}

const max = Math.max(...map.values());

let result = null;
for (const [key, value] of map) {
  if (value === max) {
    if (result === null) result = key;
    else {
      console.log('?');
      return;
    }
  }
}

console.log(result);
