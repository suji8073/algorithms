function solution(n) {
    const result = n.toString(3).split('').map(Number);
    
    return result.reduce((acc, cur, i) => acc + cur * 3**i, 0)
}