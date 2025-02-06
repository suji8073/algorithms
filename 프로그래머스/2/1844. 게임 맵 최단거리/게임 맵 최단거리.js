function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    
    const vactor = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ];
    
    const queue = [[0, 0, 1]];
    while (queue.length > 0){
        const [x, y, count] = queue.shift();
        
        if (x === n - 1 && y === m - 1){
            return count;
        }
        
        for (const vact of vactor){
            const nx = x + vact[0];
            const ny = y + vact[1];
            
            if (nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] === 1){
                maps[nx][ny] = 0;
                queue.push([nx, ny, count+1])
            }
        }
    }
    
    return -1;
}