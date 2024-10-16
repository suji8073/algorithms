function solution(t, p) {
    var answer = 0;
    for (var i = 0; i < t.length - p.length + 1; i++){
        const length = t.slice(i, i + p.length);
        if (length <= Number(p)){
            answer ++;
        }
    }
    return answer;
}