function solution(arr) {
    // const min = Math.min(...arr);
    // const array = arr.filter((num) => num !== min);
    // return array.length === 0 ? [-1] : array;
    
    if (arr.length === 1) return [-1];
    
    let min = Infinity;
    let indexArr = 0;
    
    arr.forEach((value, index) => {
        if (value < min) {
            min = value;
            indexArr = index;
        } 
    });
    
    arr.splice(indexArr, 1);
    
    return arr;
}