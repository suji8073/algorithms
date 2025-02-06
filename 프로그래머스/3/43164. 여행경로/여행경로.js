function solution(tickets) {
    const graph = {};
    
    for (let i = 0; i < tickets.length; i++) {
        const [start, end] = tickets[i];

        if (!graph[start]) graph[start] = [];
        graph[start].push(end)
    }
    
    for (const key in graph){
        graph[key].sort();
    }
    
    const dfsArr = [];
    dfs("ICN")
    return dfsArr;
    
    function dfs(start) {
        while(graph[start] && graph[start].length > 0){
            const next = graph[start].shift();
            dfs(next);
        }
        dfsArr.unshift(start);
    }
}