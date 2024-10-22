function solution(arr) {
    var count = 0;
    const len = arr.length;
    
    if (len === 1) return arr;
    
    let i = 0;
    while(true) {
        if (2**i < len && len <= 2**(i+1)){
            count = 2**(i+1);
            break;
        }
        i++;
    }
    
    return arr.concat(new Array(count - len).fill(0));
}