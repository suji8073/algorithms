function solution(k, score) {
    var answer = [];
    var stack = [];
    
    for (var i = 0; i < score.length; i++) {
        if (stack.length < k){
            stack.push(score[i]);
        } else {
            if (stack[0] < score[i]){
                stack.splice(0, 1);
                stack.push(score[i]);
            }
        }
        stack.sort((a,b) => a-b);
        answer.push(stack[0]);
    }
    return answer;
}