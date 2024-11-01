function solution(numer1, denom1, numer2, denom2) {
    var result = [];
    for (let i = Math.min(denom1, denom2); i <= denom1 * denom2; i++) {
        if (i % denom1 === 0 && i % denom2 === 0){
            result = [(numer1 * i / denom1) + (numer2 * i / denom2), i];
            break;
        }
    }
    
    for (let i = Math.min(...result); i > 0; i--) {
        if (result[0] % i === 0 && result[1] % i === 0) {
            return [result[0] / i, result[1] / i]
        }
    }
}