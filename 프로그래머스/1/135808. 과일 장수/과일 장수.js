function solution(k, m, score) {
    score.sort((a, b) => b - a);
   
    var answer = 0;
    for (var i = 0; i < Math.floor(score.length / m); i++) {
        const array = score.slice(i*m, i*m + m);
        answer += array[m-1] * m;
    }

    return answer;
}