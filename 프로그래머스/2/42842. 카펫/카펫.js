function solution(brown, yellow) {
    const number = brown + yellow;
    
    for (let i = 1; i<= number; i++) {
        if (number % i === 0 && ((number / i - 2) * (i - 2) === yellow)) {
            return [number / i, i]
        }
    }

}