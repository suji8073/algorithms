function solution(s) {
    var count = 0;
    var sum = 0;
    
    while (s !== '1') {
        const num = [...s].filter(c => c === '0').length;
        sum += num;
        count++;
        s = (s.length - num).toString(2);
    }
    
    return [count, sum];
}