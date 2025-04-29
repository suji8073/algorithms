const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const [x1, x2, x3, x4] = input[0].split(' ').map(Number);
const [y1, y2, y3, y4] = input[1].split(' ').map(Number);

const xArr1 = Array.from({ length: x2 - x1 + 1 }, (_, i) => x1 + i);
const xArr2 = Array.from({ length: x4 - x3 + 1 }, (_, i) => x3 + i);

const xResult = [];
for (let i = 0; i < xArr1.length; i++) {
  for (let j = 0; j < xArr2.length; j++) {
    xResult.push(xArr1[i] + xArr2[j]);
  }
}

const yArr1 = Array.from({ length: y2 - y1 + 1 }, (_, i) => i + y1);
const yArr2 = Array.from({ length: y4 - y3 + 1 }, (_, i) => i + y3);

const yResult = [];
for (let i = 0; i < yArr1.length; i++) {
  for (let j = 0; j < yArr2.length; j++) {
    yResult.push(yArr1[i] + yArr2[j]);
  }
}

let first = 0;
let second = 0;
for (let i = 0; i < xResult.length; i++) {
  for (let j = 0; j < yResult.length; j++) {
    if (xResult[i] > yResult[j]) first++;
    else if (xResult[i] < yResult[j]) second++;
  }
}

if (first > second) console.log('Gunnar');
else if (first < second) console.log('Emma');
else console.log('Tie');
