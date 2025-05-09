function solution(numbers) {
    const result = numbers.sort((a, b) => {
        const strA = a + '' + b;
        const strB = b + '' + a;
        return strA > strB ? -1 : 1
    });
    
    return result[0] === 0 ? '0' : result.join('');
}