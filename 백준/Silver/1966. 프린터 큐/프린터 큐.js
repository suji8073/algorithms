const fs = require('fs');
const [test, ...input] = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

for (let i = 0; i < Number(test) * 2; i += 2) {
  const [_, M] = input[i].split(' ').map(Number);
  const arr = input[i + 1].split(' ').map(Number);

  const result = [];
  const scoreMap = new Map();

  arr.forEach((num, i) => {
    result.push([i, num]);
    scoreMap.set(num, scoreMap.has(num) ? scoreMap.get(num) + 1 : 1);
  });

  const keys = [...scoreMap.keys()].sort((a, b) => a - b);

  let count = 0;
  while (result.length > 0) {
    const [index, target] = result.shift();
    if (target !== keys[keys.length - 1]) {
      result.push([index, target]);
      continue;
    }

    count++;
    if (index === M) break;

    if (scoreMap.get(target) === 1) {
      keys.pop();
      continue;
    }

    scoreMap.set(target, scoreMap.get(target) - 1);
  }

  console.log(count);
}
