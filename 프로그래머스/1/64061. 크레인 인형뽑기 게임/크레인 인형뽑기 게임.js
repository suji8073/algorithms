function solution(board, moves) {
    var numArr = [];
    const len = board.length;
    
    for (let i = 0; i < len; i++) {
        const temp = [];
        for (let j = 0; j < len; j++) {
            if (board[j][i] !== 0){
                temp.push(board[j][i])
            }
        }
        numArr.push(temp)
    }

    var answer = 0;
    var stack = [];
    for (const move of moves) {
        let target = numArr[move-1].shift();
        if (target === undefined) continue;
        
        if (stack.at(-1) === target) {
            answer += 2;
            stack.pop();
        } else {
            stack.push(target);
        }
    }
    
    return answer;
}