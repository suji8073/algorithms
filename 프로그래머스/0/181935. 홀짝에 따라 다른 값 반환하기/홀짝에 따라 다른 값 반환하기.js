function solution(n) {
    var answer = 0;
    if (n % 2 === 0){
        for (var i=2; i<=n; i+=2){
            answer += i**2;
        }
        return answer;
    }
    for (var i=1; i<=n; i+=2){
        answer += i;
    }
    return answer;
}