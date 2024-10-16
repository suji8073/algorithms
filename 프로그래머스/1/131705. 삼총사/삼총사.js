function solution(number) {
    var answer = 0;
    const length = number.length;
    
    for (var i = 0; i < length -2; i++) {
        for (var j = i+1; j < length -1; j++) {
            for (var k = j + 1; k < length; k++) {
                if (number[i] + number[j] + number[k] === 0) answer ++;
            }
        }
    }

    return answer;
}