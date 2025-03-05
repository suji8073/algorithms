const fs = require('fs');
const str = fs.readFileSync('/dev/stdin', 'utf-8').trim();

if (str === '') {
  console.log(0);
  return;
}

console.log(str.split(' ').length);
