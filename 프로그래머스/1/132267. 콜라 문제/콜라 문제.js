function solution(a, b, n) {
    var answer = 0;
    while (n  >= a && n >= 2) {
        const i = Math.floor(n / a);
        const j = n - a * i;

        answer += i * b;
        n = i * b + j;
    }
    return answer;
}