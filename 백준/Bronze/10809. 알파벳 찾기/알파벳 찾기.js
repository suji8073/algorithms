const fs = require('fs');
const str = fs.readFileSync('/dev/stdin', 'utf-8').trim();

const arr = Array(26).fill(-1);

str.split('').map((char, i) => {
  const index = char.charCodeAt() - 97;
  if (arr[index] === -1) {
    arr[index] = i;
  }
});

console.log(arr.join(' '));
