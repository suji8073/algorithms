const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const [, , B] = input[0].split(' ').map(Number);
const arr = input.slice(1).map((row) => row.split(' ').map(Number));

const flat = arr.flat();
const min = Math.min(...flat);
const max = Math.max(...flat);

let resultTime = Number.MAX_SAFE_INTEGER;
let resultHeight = 0;

for (let h = min; h <= max; h++) {
  let remove = 0;
  let add = 0;

  for (const height of flat) {
    if (height < h) add += h - height;
    if (height > h) remove += height - h;
  }

  if (B + remove - add < 0) continue;
  const time = remove * 2 + add;
  if (resultTime === time) {
    resultHeight = Math.max(resultHeight, h);
  } else if (resultTime > time) {
    resultTime = time;
    resultHeight = h;
  }
}

console.log(`${resultTime} ${resultHeight}`);
