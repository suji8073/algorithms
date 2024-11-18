function solution(keyinput, board) {
    board = [(board[0] - 1) / 2, (board[1] - 1) / 2];
    
    var answer = [0,0];
    for (key of keyinput){
        if (key === 'left') answer[0]--;
        else if (key === 'right') answer[0]++;
        else if (key === 'up') answer[1]++;
        else if (key === 'down') answer[1]--;
        
        if (-board[0] > answer[0] || answer[0] > board[0]){
            answer[0] =  answer[0] < 0 ? -board[0] : board[0];
        }
        
         if (-board[1] > answer[1] || answer[1] > board[1]){
            answer[1] = answer[1] < 0 ? -board[1] : board[1];
        }
    }

    return answer;
}