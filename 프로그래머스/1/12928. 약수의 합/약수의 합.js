function solution(n) {
    var answer = 0;
    for (var i=1; i<= Math.sqrt(n); i++) {
        if (n % i === 0){
            answer += i;
            if (n / i !== i && n !== 1){
                answer += n/i;
            }
        }
    }
    return answer;
}