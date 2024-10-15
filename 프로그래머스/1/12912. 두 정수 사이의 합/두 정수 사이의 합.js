function solution(a, b) {
    const max = Math.max(a,b);
    const min = Math.min(a,b);
    
    return Array.from({length : max - min + 1}, (_, i) => min + i).reduce((acc, cur) => acc + cur);
}