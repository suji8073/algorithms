const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim();

const [A, B] = input.split(' ');
const arr = ['4', '7'];

let answer = 0;
for (let i = A.length; i <= B.length; i++) {
  for (const num of getPermission(i)) {
    if (num >= Number(A) && num <= Number(B)) {
      answer++;
    }
  }
}

console.log(answer);

function getPermission(selectNum) {
  const result = [];
  const temp = [];

  backTracking(0);
  function backTracking(depth) {
    if (depth === selectNum) {
      result.push(Number(temp.join('')));
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      temp.push(arr[i]);
      backTracking(depth + 1);
      temp.pop();
    }
  }

  return result;
}