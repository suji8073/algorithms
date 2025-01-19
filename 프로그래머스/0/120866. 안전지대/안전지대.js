function checkIndex(x, y, board){
    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++){
            if (x + i >= 0 && x + i < board.length && y + j >= 0 && y + j < board[0].length) {
                board[x+i][y+j] = 1;
            }
        }
    }
    return board;
}

function solution(board) {
    var indexArr = [];
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++){
            if (board[i][j] === 1) indexArr.push([i, j])
        }
    }
    
    for (const [x, y] of indexArr) {
        board = checkIndex(x, y, board);
    }
    
    return board.flat().filter(num => num === 0).length;
}