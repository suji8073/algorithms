function solution(arr) {
    let count = 0;
    let lastArray = arr;
    
    while(true) {
        arr = arr.map((num) => {
            if (num > 50 && num % 2 === 0) return num / 2;
            else if (num < 50 && num % 2 === 1) return num * 2 + 1;
            else return num;    
        })
        
        if (arr.length === lastArray.length && arr.every((v, i) => v === lastArray[i])) break;
        else {
            count ++;
            lastArray = arr;
        }
    }
    
    return count;
}