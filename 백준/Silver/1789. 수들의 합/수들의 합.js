const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim();
const N = Number(input);

let result = 0;
let index = 1;
while (true) {
  result += index;
  if (result > N) {
    console.log(index - 1);
    return;
  }
  index++;
}
