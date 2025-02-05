const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const [N, M, V] = input[0].split(' ').map(Number);
const graph = input.slice(1).map((row) => row.split(' ').map(Number));

const map = new Map();
for (let i = 0; i < M; i++) {
  const [num1, num2] = graph[i];
  map.set(num1, map.has(num1) ? sorting([...map.get(num1), num2]) : [num2]);
  map.set(num2, map.has(num2) ? sorting([...map.get(num2), num1]) : [num1]);
}

function sorting(arr) {
  return arr.sort((a, b) => a - b);
}

let init = Array(N).fill(false);
const dfsArr = [];
const bfsArr = [];

function dfs(cnt) {
  if (dfsArr.length === N) return;

  dfsArr.push(cnt);
  init[cnt - 1] = true;

  if (!map.has(cnt)) return;

  for (const value of map.get(cnt)) {
    if (!init[value - 1]) {
      dfs(value);
    }
  }
}

dfs(V);

init = Array(N).fill(false);
bfs();

function bfs() {
  const queue = [V];
  bfsArr.push(V);
  init[V - 1] = true;

  while (true) {
    if (queue.length === 0) break;
    const current = queue.shift();
    if (!map.has(current)) continue;

    for (const value of map.get(current)) {
      if (!init[value - 1]) {
        bfsArr.push(value);
        init[value - 1] = true;
        queue.push(value);
      }
    }
  }
}
console.log(dfsArr.join(' '));
console.log(bfsArr.join(' '));
