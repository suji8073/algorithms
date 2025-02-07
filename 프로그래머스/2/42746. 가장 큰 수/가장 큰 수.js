function solution(numbers) {
    if (numbers.every(num => num === 0)){
        return "0"
    }
    const strNumArr = numbers.map(String).sort((a, b) => Number(b + a) - Number(a + b));
    return strNumArr.join('');
}