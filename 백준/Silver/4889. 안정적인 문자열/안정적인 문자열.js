const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

let idx = 0;
while (idx < input.length) {
  if (input[idx].includes('-')) {
    return;
  }

  const newArr = solution(input[idx].split(''));

  const count = getChange(newArr);
  console.log(`${idx + 1}. ${count}`);
  idx++;
}

function solution(arr) {
  const stack = [];
  for (const str of arr) {
    if (stack.length === 0) {
      stack.push(str);
      continue;
    }

    const last = stack[stack.length - 1];
    if (last === '{' && str === '}') {
      stack.pop();
    } else {
      stack.push(str);
    }
  }

  return stack;
}

function getChange(arr) {
  if (arr.length === 0) {
    return 0;
  }

  const stack = [];
  let count = 0;
  for (const str of arr) {
    if (stack.length === 0) {
      if (str === '}') {
        stack.push('{');
        count++;
      } else {
        stack.push(str);
      }
      continue;
    }
    const last = stack[stack.length - 1];
    if (last === '{' && str === '}') {
      stack.pop();
    } else if (last === '{' && str === '{') {
      count++;
      stack.pop();
    }
  }

  return count;
}
