function solution(n,a,b) {
    var array = Array.from({length: n}, (_, i) => 1 + i);
    
    const ab = [a, b].sort((a, b) => a - b);
    
    let count = 1;
    while(true) {
        var oldArr = [];
        for (let i = 0; i < array.length; i+= 2) {
            if (array[i] === ab[0] && array[i+1] === ab[1]){
                return count;
            }
            
            if (!ab.includes(array[i]) && !ab.includes(array[i+1])){
                oldArr.push(array[i]);
                continue;
            }
            
            oldArr.push(ab.includes(array[i]) ? array[i] : array[i+1])
        }
        
        count++;
        array = oldArr;
    }

    return count;
}