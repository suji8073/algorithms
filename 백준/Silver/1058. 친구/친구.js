const fs = require('fs');
let input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1).map((row) => row.split(''));

const graph = {};
const newGraph = {};

for (let i = 0; i < n; i++) {
  graph[i] = [];
  newGraph[i] = [];
  arr[i].map((item, index) => {
    if (item === 'Y') {
      graph[i].push(index);
      newGraph[i].push(index);
    }
  });
}

for (const key in graph) {
  const value = graph[key];
  for (const item of value) {
    const indexArr = getFindIndex(key, item);
    newGraph[key].push(...indexArr);
  }
}

let max = 0;
for (const key in newGraph) {
  const value = [...new Set(newGraph[key])];
  max = Math.max(value.length, max);
}
console.log(max);

function getFindIndex(tKey, tValue) {
  const result = [];
  for (const key in graph) {
    if (key === tKey) continue;

    const valueArr = graph[key];
    if (valueArr.includes(tValue)) {
      result.push(+key);
    }
  }
  return result;
}
