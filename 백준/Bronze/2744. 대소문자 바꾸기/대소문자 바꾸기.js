const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim();

console.log(
  [...input]
    .map((char) =>
      char.toUpperCase() === char ? char.toLowerCase() : char.toUpperCase()
    )
    .join('')
);