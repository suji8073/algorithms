function solution(n, computers) {
    const len = computers.length;
    const map = new Map();
    
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (i !== j && computers[i][j] === 1) {
                map.set(i+1, map.has(i+1) ? [j+1, ...map.get(i+1)] : [j+1]);
            }
        }
    }
    
    const visited = Array(n+1).fill(false);
    let count = 0;
    for (let i = 1; i <= n; i++){
        if (!visited[i]){
            visited[i] = true;
            count++;
            dfs(i);
        }
    }
    
    return count;
    
    function dfs(start){
        for (const value of map.get(start) ?? []){
            if (!visited[value]) {
                visited[value] = true;
                dfs(value);
            }
        }
    }
    
   
}