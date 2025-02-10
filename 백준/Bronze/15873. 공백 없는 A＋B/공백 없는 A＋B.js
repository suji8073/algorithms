const fs = require('fs');
const str = fs.readFileSync('/dev/stdin', 'utf-8').trim();

if (str.length === 4) {
  console.log(20);
  return;
}

if (str.length === 2) {
  console.log(+str[0] + +str[1]);
  return;
}

console.log(10 + Number(str.replace('10', '')));
