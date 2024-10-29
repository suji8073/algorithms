function solution(sides) {
    var answer = 0;
    
    for (let i = Math.abs(sides[0] - sides[1]); i <= sides[0] + sides[1]; i++) {
        const sortArray = [...sides].concat([i]).sort((a, b) => a-b);
        if (sortArray[0] + sortArray[1] > sortArray[2]){
            answer ++;
        }
    }

    return answer;
}