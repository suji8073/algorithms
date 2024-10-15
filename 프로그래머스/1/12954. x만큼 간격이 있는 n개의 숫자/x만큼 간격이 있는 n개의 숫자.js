function solution(x, n) {
    return Array.from({length:n}, (v, i) => x + i*x);
}