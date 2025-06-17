const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const S = input[0];
const T = input[1];

dfs(T);

function dfs(str) {
  if (str === S) {
    console.log(1);
    return;
  }

  const len = str.length;
  if (len === 1) {
    console.log(0);
    return;
  }

  if (str[len - 1] === 'A') {
    dfs(str.slice(0, len - 1));
  } else {
    dfs(
      str
        .slice(0, len - 1)
        .split('')
        .reverse()
        .join('')
    );
  }
}
