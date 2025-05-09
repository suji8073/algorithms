const fs = require('fs');
const [_, ...input] = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

let result = 0;
for (const text of input) {
  result++;
  const charSet = new Set();

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (charSet.has(char) && char !== text[i - 1]) {
      result--;
      break;
    }
    charSet.add(char);
  }
}

console.log(result);
