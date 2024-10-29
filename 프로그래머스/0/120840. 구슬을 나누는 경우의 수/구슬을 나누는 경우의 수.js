function solution(balls, share) {
    var answer = 1;
    for (let i = 0; i < share; i++) {
        answer = answer * (balls - i) / (i + 1)
    }

    return answer;
}