function solution(number, limit, power) {
    let answer = 0;
    for (var i=1; i<=number; i++) {
        let sum = 0;
        for (var j=1; j<=Math.sqrt(i); j++){
            if (i % j === 0){
                sum++;
                if (j !== i/j){
                    sum++;
                }
            }
        }
        answer += (sum > limit ? power : sum);
    }
    return answer;
}