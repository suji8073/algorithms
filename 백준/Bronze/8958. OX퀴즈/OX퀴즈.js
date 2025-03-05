const fs = require('fs');
const [n, ...input] = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

for (let i = 0; i < Number(n); i++) {
  const str = input[i].split('');

  let sum = 0;
  let count = 0;

  for (let j = 0; j < str.length; j++) {
    if (str[j] === 'X') {
      count = 0;
      continue;
    }
    sum += count + 1;
    count++;
  }

  console.log(sum);
}
