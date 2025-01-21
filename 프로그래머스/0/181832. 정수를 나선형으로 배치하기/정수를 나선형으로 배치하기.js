function solution(n) {
    var answer = Array.from({length: n}, () => Array(n).fill(0));
    var direction = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    
    var x = 0, y = 0; dir = 0;
    var num = 1;
    
    while (num <= n * n) {
        answer[x][y] = num;
        num++;
        
        const nx = x + direction[dir][0];
        const ny = y + direction[dir][1];
        
       if (nx >= n || nx < 0 || ny >= n || ny < 0 || answer[nx][ny] !== 0) {
            dir = (dir + 1) % 4;
        }
        
        x += direction[dir][0];
        y += direction[dir][1];
    }

    
    return answer;
}