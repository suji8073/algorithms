function solution(n, left, right) {
    var answer = [];
    for (let i = 0; i < n; i++) {
        if (i * n + n <= left) continue;
        if (i * n > right) break;
        for (let j = 0; j < n; j++) {
            if (i * n + j < left || i * n + j > right) continue;
            answer.push(Math.max(i, j) + 1)
        }
    }
    return answer;
}