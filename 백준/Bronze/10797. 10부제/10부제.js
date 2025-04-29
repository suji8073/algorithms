const fs = require('fs');
const [target, arr] = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

let count = 0;
for (const num of arr.split(' ')) {
  const check = [...num].some((n) => n === target);
  if (check) count++;
}

console.log(count);
