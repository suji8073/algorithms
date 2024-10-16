function solution(a, b, n) {
    var answer = 0;
    while (n  >= a && n >= 2) {
        const i = Math.floor(n / a);
        answer += i * b;
        n += (b - a) * i
    }
    return answer;
}