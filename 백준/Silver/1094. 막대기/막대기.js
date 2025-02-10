const fs = require('fs');
const x = Number(fs.readFileSync('/dev/stdin', 'utf-8').trim());

const LEN = 64;
if (x === LEN) {
  console.log(1);
  return;
}


const arr = [LEN / 2, LEN / 2];

while (true) {
  const len = arr.length;
  for (let i = 1; i <= len; i++) {
    const combination = getCombinations(arr, i);
    const sumArr = getSumArr(combination);

    for (const sum of [...new Set(sumArr)]) {
      if (sum === x) {
        console.log(i);
        return;
      }
    }
  }

  const last = arr.pop();
  if (last >= x) {
    arr.pop();
  }
  arr.push(last / 2, last / 2);
}

function getSumArr(arr) {
  return arr.map((com) => com.reduce((acc, cur) => acc + cur), 0);
}

function getCombinations(arr, selectNum) {
  const result = [];
  if (selectNum === 1) return arr.map((el) => [el]);
  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNum - 1);
    const attached = combinations.map((el) => [fixed, ...el]);
    result.push(...attached);
  });
  return result;
}
