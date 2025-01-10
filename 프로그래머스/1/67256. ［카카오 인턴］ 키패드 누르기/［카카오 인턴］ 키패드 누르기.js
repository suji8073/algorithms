function findIndex(num){
    const keypads = [[1,4,7,'*'], [2,5,8,0], [3,6,9,'#']];
    
    for (let i = 0; i < keypads.length; i++) {
        for (let j = 0; j < keypads[0].length; j++){
            if (num === keypads[i][j]){
                return [i, j];
            }
        }
    }
}


function solution(numbers, hand) {
    var result = '';
    let left = [0, 3];
    let right = [2, 3];
    
    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i];
        const index = findIndex(num);
        
        if (![2, 5, 8, 0].includes(num)) {
            const isLeft = [1, 4, 7].includes(num);
            
            if (isLeft) left = index;
            else right = index;
            
            result += isLeft ? 'L' : 'R'
            continue;
        }
        

        console.log(num, index, left, right)
        const leftIndex = index.reduce((acc, cur, i) =>  acc + Math.abs(left[i] - cur), 0);
        const rightIndex = index.reduce((acc, cur, i) =>  acc + Math.abs(right[i] - cur), 0);
        
        const isHandLeft = hand === 'left';
        if (leftIndex === rightIndex){
            if (isHandLeft) left = index;
            else right = index;

            result += isHandLeft ? 'L' : 'R'
            continue;
        }
        
        if (leftIndex < rightIndex) {
            left = index;
            result += 'L'
            continue;
        }
       
        right = index;
        result += 'R'
    }
    
    return result;
}