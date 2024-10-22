function solution(a, d, included) {
    var answer = 0;
    
    for (let i = 0; i < included.length; i++) {
        answer += included[i] ? a + d*i : 0;
    }
    
    return answer;
}