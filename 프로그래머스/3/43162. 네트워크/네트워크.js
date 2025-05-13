function solution(n, computers) {
    const map = new Map();
    for (let i = 0; i < n; i++){
        for (let j = 0; j < n; j++){
            if (i !== j && computers[i][j] === 1){
                map.set(i, map.has(i) ? [...map.get(i), j] : [j]);
            }
        }
    }
    
    const visited = Array(n).fill(false);
    let result = 0;
    for (let i = 0; i < n; i++){
        if (!visited[i]){
            result++;
            dfs(i);
        }
    }
    
    return result;
    
    function dfs(node){
        visited[node] = true;
        for (const value of map.get(node) ?? []){
            if (!visited[value]) dfs(value);
        }
    }
}