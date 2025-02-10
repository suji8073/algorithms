const fs = require('fs');
const string = fs.readFileSync('/dev/stdin', 'utf-8').trim();

const result = [];
const array = [...string];
const len = array.length;

for (let i = 1; i < len - 1; i++) {
  const first = array.slice(0, i).reverse();
  for (let j = i + 1; j < len; j++) {
    const second = array.slice(i, j).reverse();
    const third = array.slice(j).reverse();
    result.push(first.concat(second, third).join(''));
  }
}

result.sort();
console.log(result[0]);