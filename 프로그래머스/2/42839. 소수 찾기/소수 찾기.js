function solution(numbers) {
    const numArr = [...numbers];
    const result = getPermutation(numArr);
    
    return [...new Set(result)].filter(r => checkNum(r)).length;
}

function checkNum(num){
    if (num === 1) return false;
    
    for (let i = 2; i <= Math.sqrt(num); i++){
        if (num % i === 0) return false;
    }
    
    return true;
}

function getPermutation(arr){
    const len = arr.length;
    
    const result = [];
    const visitied = Array(len).fill(false);
    const path = [];
    
    arr.forEach((_, i) => backTracking(i+1));
    
    return result;
    
    function backTracking(selectNum){
        if (path.length === selectNum) {
            if (path[0] !== '0') {
                result.push(Number(path.join('')));
            }
            return;
        }
        
        for (let i = 0; i < arr.length; i++){
            if (!visitied[i]){
                visitied[i] = true;
                path.push(arr[i]);
                
                backTracking(selectNum);
                
                visitied[i] = false;
                path.pop();
            }
        }
    }
}


