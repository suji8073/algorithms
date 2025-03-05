const fs = require('fs');
const arr = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n').map(Number);

arr.forEach((num) => {
  if (num === 0) {
    return;
  }

  const reverseNum = Number(String(num).split('').reverse().join(''));
  console.log(num === reverseNum ? 'yes' : 'no');
});
