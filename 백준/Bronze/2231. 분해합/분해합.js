const fs = require('fs');
const N = Number(fs.readFileSync('/dev/stdin', 'utf-8').trim());

let startNum = Number('1'.padEnd(N.length - 1, '0'));
while (true) {
  if (startNum > N) {
    console.log(0);
    return;
  }

  const sum =
    startNum +
    String(startNum)
      .split('')
      .reduce((acc, cur) => acc + Number(cur), 0);

  if (sum === N) {
    console.log(startNum);
    break;
  }
  startNum++;
}
