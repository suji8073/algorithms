function solution(lottos, win_nums) {
    const number = lottos.filter((num) => win_nums.includes(num) || num === 0);
    const zeroLength = number.filter(n => n === 0).length;
    
    if (number.length - zeroLength === 6) {
        return [1, 1];
    }
    
    if (number.length === 0) {
        return [6, 6]
    }
    
    if (zeroLength === 6) {
        return [1, 6];
    }
    
    return [6 - number.length + 1, 6 - (number.length - zeroLength) + 1];
}