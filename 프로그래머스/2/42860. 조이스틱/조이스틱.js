function solution(name) {
    const arr = [...name];
    const len = name.length;
    
    const sum = arr.reduce((acc, cur) => acc + getCount(cur), 0);
    
    if (!arr.includes('A')){
        return sum + len - 1;
    }
    
    let result = len - 1;
    for (let i = 0; i < len; i++){
        let idx = i + 1;
        while (idx < len && arr[idx] === 'A'){
            idx++;
        }
        
        result = Math.min(result, i + (len - idx) * 2, 2 * i + len - idx);
    }
    
    return result + sum;
}

function getCount(char){
    const charNum = char.charCodeAt();
    return Math.min(90 - charNum + 1, charNum - 65);
}

