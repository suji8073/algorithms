function solution(a, b) {
    // var answer = 0;
    // for (var i=0; i < a.length; i++){
    //     answer += a[i] * b[i]
    // }
    // return answer;
    // 통과 (0.16ms, 33.5MB)
    
    return a.reduce((acc, cur, i) => acc + cur * b[i], 0)
}