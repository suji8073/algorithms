function solution(n, computers) {
    const len = computers.length;
    const visited = Array(len).fill(false);
    
    const graph = {};
    
    for (let i = 0; i < len; i++) {
        graph[i+1] = [];
        for (let j = 0; j < len; j++){
            if (i !== j && computers[i][j] === 1){
                graph[i+1].push(j+1);
            }
        }
    }
    
    let count = 0;
    for (let i = 0; i < len; i++) {
        if (!visited[i]){
            count++;
            bfs(i + 1);
        }
    }
    return count;
    
    function bfs(start){
        const queue = [[start]];
        visited[start - 1] = true;
        
        while(queue.length > 0){
            const key = queue.shift();
            
            for (const value of graph[key]){
                if (!visited[value-1]){
                    visited[value-1] = true;
                    queue.push(value)
                }
            }
        }
    }
    

    
    var answer = 0;
    return graph;
}