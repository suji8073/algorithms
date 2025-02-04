const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const [N, M] = input[0].trim().split(' ').map(Number);
const NArr = input.slice(1, N + 1).map((n) => n.trim().split(' ').map(Number));
const MArr = input.slice(N + 1).map((m) => m.trim().split(' ').map(Number));

let speed = 0;
let nIndex = 0;
let mIndex = 0;

while (nIndex <= N - 1 && mIndex <= M - 1) {
  const [nx1, ny1] = NArr[nIndex];
  const [mx1, my2] = MArr[mIndex];

  if (nx1 < mx1) {
    MArr[mIndex][0] -= nx1;
    nIndex++;
  } else if (nx1 === mx1) {
    nIndex++;
    mIndex++;
  } else {
    NArr[nIndex][0] -= mx1;
    mIndex++;
  }

  if (ny1 < my2) speed = Math.max(speed, my2 - ny1);
}

console.log(speed);
