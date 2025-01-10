function findIndex(num){
    const keypads = [[1,4,7,'*'], [2,5,8,0], [3,6,9,'#']];
    
    for (let row = 0; row < keypads.length; row++) {
        for (let col = 0; col < keypads[0].length; col++){
            if (num === keypads[row][col]){
                return [row, col];
            }
        }
    }
    return null;
}

function calcIndex(arr, target){
    return Math.abs(arr[0] - target[0]) + Math.abs(arr[1] - target[1]);
}


function solution(numbers, hand) {
    var result = '';
    let left = [0, 3];
    let right = [2, 3];
    
    for (const num of numbers) {
        const index = findIndex(num);
        
        if (![2, 5, 8, 0].includes(num)) {
            const isLeft = [1, 4, 7].includes(num);
            
            if (isLeft) left = index;
            else right = index;
            
            result += isLeft ? 'L' : 'R'
            continue;
        }
        
        const calcLeft = calcIndex(index, left);
        const calcRight = calcIndex(index, right);
        
        if (calcLeft === calcRight) {
            const isHandLeft = hand === 'left';
            
            if (isHandLeft) left = index;
            else right = index;

            result += isHandLeft ? 'L' : 'R'
            continue;
        }
        
        if (calcLeft < calcRight) left = index;
        else right = index;

        result += calcLeft < calcRight ? 'L' : 'R'
    }
    
    return result;
}