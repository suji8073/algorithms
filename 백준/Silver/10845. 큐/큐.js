const fs = require('fs');
const [n, ...arr] = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const queue = [];
const result = [];

for (let i = 0; i < Number(n); i++) {
  const [str, num] = arr[i].split(' ');

  if (str === 'push') {
    queue.push(num);
  } else if (str === 'pop') {
    result.push(queue.length === 0 ? -1 : queue.shift());
  } else if (str === 'size') {
    result.push(queue.length);
  } else if (str === 'empty') {
    result.push(queue.length === 0 ? 1 : 0);
  } else if (str === 'front') {
    result.push(queue.length === 0 ? -1 : queue[0]);
  } else if (str === 'back') {
    result.push(queue.length === 0 ? -1 : queue[queue.length - 1]);
  }
}

console.log(result.join('\n'));
