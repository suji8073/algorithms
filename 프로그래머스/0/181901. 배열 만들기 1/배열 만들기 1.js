function solution(n, k) {
    return Array.from({length : Math.floor(n/k)}, (_, i) => k + i * k);
}