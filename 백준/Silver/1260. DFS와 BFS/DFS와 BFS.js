const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const [n, m, v] = input[0].trim().split(' ').map(Number);
const arr = input.slice(1).map((row) => row.trim().split(' ').map(Number));

const graph = {};
for (const [start, end] of arr) {
  if (!graph[start]) graph[start] = [];
  if (!graph[end]) graph[end] = [];

  graph[start].push(end);
  graph[end].push(start);
}

for (const key in graph) {
  graph[key].sort((a, b) => a - b);
}

const dfsVisited = Array(n).fill(false);
const dfsArr = [];
dfs(v);

function dfs(current) {
  if (dfsArr.length === n) return;

  dfsVisited[current - 1] = true;
  dfsArr.push(current);

  for (const value of graph[current] || []) {
    if (!dfsVisited[value - 1]) {
      dfs(value);
    }
  }
}

const bfsVisited = Array(n).fill(false);
const bfsArr = [];
bfs();

function bfs() {
  const queue = [v];
  bfsVisited[v - 1] = true;
  bfsArr.push(v);

  while (queue.length > 0) {
    const next = queue.shift();

    for (const value of graph[next] || []) {
      if (!bfsVisited[value - 1]) {
        bfsVisited[value - 1] = true;
        bfsArr.push(value);
        queue.push(value);
      }
    }
  }
}

console.log(dfsArr.join(' '));
console.log(bfsArr.join(' '));
