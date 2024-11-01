function solution(array) {
    var answer = {};
    for (num of array) {
        if (answer[num]) answer[num]++;
        else answer[num] = 1;
    }
    
    answer = Object.entries(answer).sort((a, b) => b[1] - a[1]);
    
    if (answer.length > 1 && answer[0][1] === answer[1][1]){
        return -1;
    }
    
    return Number(answer[0][0]);
}