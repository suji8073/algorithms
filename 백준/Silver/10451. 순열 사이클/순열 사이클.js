const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim();
const input = stdin.split('\n');

const T = Number(input.shift());

for (let i = 0; i < T; i++){
    const N = Number(input.shift());
    const arr = input.shift().split(' ').map(Number);

    const map = new Map();
    for (let i = 1; i <= N; i++){
        map.set(i, arr[i-1]);
    }

    let count = 0;
    const visited = Array(N + 1).fill(false);
    
    for (let i = 1; i <= N; i++){
        if (!visited[i]){
            count++;
            dfs(i);
        }
    }
    console.log(count);

    function dfs(idx){
        visited[idx] = true;
        const value = map.get(idx);
        if (!visited[value]){
            dfs(value);
        }
    }
}