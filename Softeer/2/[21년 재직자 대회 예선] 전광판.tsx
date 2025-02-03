const fs = require('fs');
const [n, ...input] = fs
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
  .split('\n')
  .map((str) => str.split(' '));

input.map((i) => solve(i));

function solve(arr) {
  const switchMap = new Map([
    ['0', [1, 2, 3, 5, 6, 7]],
    ['1', [3, 6]],
    ['2', [1, 3, 4, 5, 7]],
    ['3', [1, 3, 4, 6, 7]],
    ['4', [2, 3, 4, 6]],
    ['5', [1, 2, 4, 6, 7]],
    ['6', [1, 2, 4, 5, 6, 7]],
    ['7', [1, 2, 3, 6]],
    ['8', [1, 2, 3, 4, 5, 6, 7]],
    ['9', [1, 2, 3, 4, 6, 7]],
  ]);

  let [case1, case2] = arr;
  const maxLen = Math.max(case1.length, case2.length);

  case1 = case1.padStart(maxLen, '*');
  case2 = case2.padStart(maxLen, '*');

  let answer = 0;
  for (let i = 0; i < maxLen; i++) {
    const arr1 = case1[i] === '*' ? [] : switchMap.get(case1[i]);
    const arr2 = case2[i] === '*' ? [] : switchMap.get(case2[i]);

    const on = arr2.filter((num) => arr1.includes(num));
    answer += arr2.length + arr1.length - 2 * on.length;
  }
  console.log(answer);
}
