function solution(n, computers) {
    const map = new Map();
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i !== j && computers[i][j] === 1){
                map.set(i, map.has(i) ? [j, ...map.get(i)] : [j]);
            }
        }
    }
    
    const visited = Array(n).fill(false);
    
    let result = 0;
    for (let i = 0; i < n; i++) {
        if (visited[i]) continue;
        
        result++;
        visited[i] = true;
        dfs(i);
    }
    
    return result;
    
    function dfs(start) {
        for (const value of map.get(start) ?? []) {
            if (!visited[value]) {
                visited[value] = true;
                dfs(value);
            }
        }
    }
}