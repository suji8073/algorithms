const fs = require('fs');
const [n, ...input] = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

input.sort((a, b) => {
  if (a.length !== b.length) {
    return a.length > b.length ? 1 : -1;
  }

  const aNum = [...a].reduce((acc, cur) => acc + (!isNaN(cur) ? +cur : 0), 0);
  const bNum = [...b].reduce((acc, cur) => acc + (!isNaN(cur) ? +cur : 0), 0);

  if (aNum !== bNum) {
    return aNum > bNum ? 1 : -1;
  }

  return a > b ? 1 : -1;
});

console.log(input.join('\n'));
