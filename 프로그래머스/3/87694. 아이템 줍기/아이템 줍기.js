function solution(rectangle, characterX, characterY, itemX, itemY) {
    const vectors = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const maps = Array.from({length : 102}, () => Array(102).fill(0));
    const visited = Array.from({length : 102}, () => Array(102).fill(0));
    
    for (const [x1, y1, x2, y2] of rectangle){
        for (let i = x1 * 2; i <= x2 * 2; i++){
            for (let j = y1 * 2; j <= y2 * 2; j++){
                maps[i][j] = 1;
            }
        }
    }
    
    for (const [x1, y1, x2, y2] of rectangle){
        for (let i = x1 * 2 + 1; i < x2 * 2; i++){
            for (let j = y1 * 2 + 1; j < y2 * 2; j++){
                maps[i][j] = 0;
            }
        }
    }
    
    return bfs();
    
    function bfs(){
        const queue = [[characterX * 2, characterY * 2, 0]];
        visited[characterX * 2][characterY * 2] = true;
        
        while (queue.length > 0){
            const [x, y, count] = queue.shift();
            if (x === itemX * 2 && y === itemY * 2){
                return count / 2;
            }
            
            for (const vector of vectors){
                const nx = x + vector[0];
                const ny = y + vector[1];
                
                if (nx >= 0 && nx < 102 && ny >= 0 && ny < 102 && maps[nx][ny] === 1 && !visited[nx][ny]){
                    visited[nx][ny] = true;
                    queue.push([nx, ny, count + 1]);
                }
            }
        }
        return -1;
    }
}