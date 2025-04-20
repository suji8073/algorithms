function solution(sequence) {
    const len = sequence.length;
    const arr1 = [];
    const arr2 = [];
    
    for (let i = 0; i < len; i++){
        const init = i % 2 === 0 ? -1 : 1;
        arr1.push(sequence[i] * init);
        arr2.push(sequence[i] * init * (-1));
    }
    
    return Math.max(maxNum(arr1), maxNum(arr2))
    
    function maxNum(array){
        let max = array[0];
        let sum = array[0];
        
        for (let i = 1; i < len; i++){
            sum = Math.max(array[i], sum + array[i]);
            max = Math.max(sum, max);
        }
        
        return max;
    }
    
    console.log(arr1, arr2)
}

