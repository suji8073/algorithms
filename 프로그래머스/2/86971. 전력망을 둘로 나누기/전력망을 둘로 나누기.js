function solution(n, wires) {
    const graph = {};
    for (const [start, end] of wires) {
        if (!graph[start]) graph[start] = [];
        if (!graph[end]) graph[end] = [];
        
        graph[start].push(end);
        graph[end].push(start);
    }
    
    let result = n;
    for (const wire of wires) {
        const [a, b] = wire;
        result = Math.min(Math.abs(bfs(a, b) - bfs(b, a)), result);
    }
    return result;
    
    function bfs(start, end){
        const queue = [[start]];
        const visited = Array(n).fill(false);
        let count = 0;
        visited[start - 1] = true;
        
        while(queue.length > 0){
            const next = queue.shift();
            for (const value of graph[next]){
                if (!visited[value-1] && value !== end) {
                    visited[value-1] = true;
                    queue.push(value);
                }
            }
            count++;
        }
        
        return count;
    }
    
    
    
  
    return 0;
}