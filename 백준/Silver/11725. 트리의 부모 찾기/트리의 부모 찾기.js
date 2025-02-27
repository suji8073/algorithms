const fs = require('fs');
const [n, ...input] = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const array = input.map((row) => row.split(' ').map(Number));

const map = new Map();
for (const [x, y] of array) {
  map.set(x, map.has(x) ? [...map.get(x), y] : [y]);
  map.set(y, map.has(y) ? [...map.get(y), x] : [x]);
}

for (const [_, value] of map) {
  value.sort((a, b) => a - b);
}

const visited = Array(Number(n)).fill(false);
const graph = Array(Number(n)).fill(0);

bfs(1);

console.log(graph.slice(1).join('\n'));
function bfs() {
  const queue = [];
  for (const value of [...map.get(1)]) {
    queue.push([value]);
    graph[value - 1] = 1;
    visited[value - 1] = true;
  }

  while (queue.length > 0) {
    const [value] = queue.shift();

    const arr = map.get(value);
    for (const item of arr) {
      if (!visited[item - 1]) {
        visited[item - 1] = true;
        queue.push([item]);
        graph[item - 1] = value;
      }
    }
  }
}
