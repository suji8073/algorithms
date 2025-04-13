function solution(tickets) {
    const len = tickets.length;
    const map = new Map();
    
    for (let i = 0; i < len; i++) {
        const [start, end] = tickets[i];
        map.set(start, map.has(start) ? [...map.get(start), `${end}-${i}`] : [`${end}-${i}`]);
    };
    
    for (const [key, value] of map){
        value.sort();
    }
    
    let result = null;
    dfs(['ICN'], Array(len).fill(false));
    
    return result;
    
    function dfs(arr, visited) {
        if (arr.length === len + 1){
            if (!result) result = [...arr]
            return;
        }
        
        const last = arr[arr.length-1];
        for (const value of map.get(last) || []) {
            const [name, i] = value.split('-');
            if (!visited[i]) {
                const newVisited = [...visited];
                newVisited[i] = true;
                dfs([...arr, name], newVisited);
            }
        }
    }
        
}

