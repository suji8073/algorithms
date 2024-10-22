function solution(arr) {
    const max = Math.max(...arr);
    var index = 2;
    
    while(true) {
        if (!arr.some(n => (max * index) % n !== 0)) break;
        index ++;
    }
    
    return max * index;
}