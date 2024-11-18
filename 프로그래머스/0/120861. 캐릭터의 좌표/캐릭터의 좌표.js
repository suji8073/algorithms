function solution(keyinput, board) {
    const width = (board[0] - 1) / 2;
    const height = (board[1] - 1) / 2;
    
    var answer = [0,0];
    for (key of keyinput) {
        if (key === 'left') answer[0]--;
        else if (key === 'right') answer[0]++;
        else if (key === 'up') answer[1]++;
        else if (key === 'down') answer[1]--;
        
        if (-width > answer[0] || answer[0] > width){
            answer[0] = answer[0] < 0 ? -width : width;
        }
        
         if (-height > answer[1] || answer[1] > height){
            answer[1] = answer[1] < 0 ? -height : height;
        }
    }

    return answer;
}