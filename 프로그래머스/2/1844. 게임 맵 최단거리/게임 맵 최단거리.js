function solution(maps) {
    const vectors = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const visited = maps.map(row => row.map(item => item === 0));
    
    const N = maps.length;
    const M = maps[0].length;
    
    return bfs();
    
    function bfs() {
        const queue = [[0, 0, 1]];
        visited[0][0] = true;
        
        while(queue.length > 0) {
            const [x, y, count] = queue.shift();
            
            if (x === N - 1 && y === M - 1) {
                return count;
            }
            
            for (const vector of vectors) {
                const nx = x + vector[0];
                const ny = y + vector[1];
                
                if (nx >= 0 && nx < N && ny >= 0 && ny < M && !visited[nx][ny]){
                    visited[nx][ny] = true;
                    queue.push([nx, ny, count+1]);
                }
            }
        }
        return -1;
    }
}