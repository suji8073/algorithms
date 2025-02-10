const fs = require('fs');
const array = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split('\n')
  .map((row) => row.split(' ').map(Number));

for (const [a, b] of array.slice(0, array.length - 1)) {
  const str = a > b ? 'Yes' : 'No';
  console.log(str);
}
