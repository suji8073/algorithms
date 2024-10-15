function solution(num) {
    let number = num;
    let count = 0;
    
    while (number !== 1){
        if (number % 2 === 0){
            number = number / 2;
        } else {
            number = number * 3 + 1;
        }
        count++;
        if (count > 500) return -1;
    }
    
    return count;
}