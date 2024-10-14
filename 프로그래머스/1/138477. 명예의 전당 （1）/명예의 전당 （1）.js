function solution(k, score) {
    var answer = [];
    var stack = [];
    for (var i=0; i<score.length; i++){
        if (stack.length === k && Math.min(...stack) < score[i]){
            stack[k-1] = score[i];
        } else if (stack.length < k){
            stack.push(score[i]); 
        }
        stack.sort((a, b) => b-a);
        answer.push(Math.min(...stack));
    }
    
    return answer;
}