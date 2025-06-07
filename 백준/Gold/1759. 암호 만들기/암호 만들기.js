const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const [L, _] = input[0].split(' ').map(Number);

const arr1 = [];
const arr2 = [];

for (const char of input[1].split(' ')) {
  ['a', 'e', 'i', 'o', 'u'].includes(char) ? arr1.push(char) : arr2.push(char);
}

const result = [];

for (let i = 1; i <= arr1.length; i++) {
  if (L - i < 2) break;

  const p1 = getPermission(arr1, i);
  const p2 = getPermission(arr2, L - i);

  for (let j = 0; j < p1.length; j++) {
    for (let k = 0; k < p2.length; k++) {
      result.push([...p1[j], ...p2[k]].sort());
    }
  }
}

console.log(
  result
    .sort()
    .map((row) => row.join(''))
    .join('\n')
);

function getPermission(arr, selectNum) {
  const result = [];
  dfs([], 0);

  function dfs(depth, idx) {
    if (depth.length === selectNum) {
      result.push([...depth]);
      return;
    }

    if (idx >= arr.length) return;

    dfs([...depth, arr[idx]], idx + 1);
    dfs(depth, idx + 1);
  }

  return result;
}
