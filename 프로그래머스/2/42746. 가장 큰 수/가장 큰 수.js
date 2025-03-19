function solution(numbers) {
    numbers.sort((a, b) => {
        const strA = a + "";
        const strB = b + "";
        
        return Number(strA + strB) > Number(strB + strA) ? -1 : 1;
    });
    
    return numbers[0] === 0 ? '0' : numbers.join('');
}