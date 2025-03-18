const fs = require('fs');
const [T, ...inputFile] = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const array = [1, 1, 1];

for (const input of inputFile) {
  const num = Number(input);

  if (num === 1 || num === 2 || num === 3) {
    console.log(1);
    continue;
  }

  if (array.length < num) {
    for (let i = 3; i <= num; i++) {
      array[i] = array[i - 3] + array[i - 2];
    }
  }

  console.log(array[num - 1]);
}
