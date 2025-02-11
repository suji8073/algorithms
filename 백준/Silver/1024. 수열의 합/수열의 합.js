const fs = require('fs');
let [N, L] = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(' ').map(Number);

while (true) {
  const minStart = getSum(L);
  const firstNum = (N - minStart) / L;
  if (firstNum < 0 || L > 100) {
    console.log(-1);
    return;
  }

  if (Number.isInteger(firstNum)) {
    const arr = Array.from({ length: L }, (_, i) => firstNum + i);
    console.log(arr.join(' '));
    return;
  }

  L++;
}

function getSum(n) {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    sum += i;
  }
  return sum;
}
