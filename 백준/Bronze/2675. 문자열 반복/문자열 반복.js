const fs = require('fs');
const [n, ...input] = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

for (let i = 0; i < Number(n); i++) {
  const [R, str] = input[i].split(' ');

  const result = str
    .split('')
    .reduce((acc, cur) => acc + cur.repeat(Number(R)), '');
  console.log(result);
}
