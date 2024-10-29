function solution(l, r) {
    var answer = [];
    
    for (var i = l; i <= r; i++) {
        if (String(i).split('').every(num => num % 5 === 0)) {
            answer.push(i);
        }
    }
    
    return answer.length === 0 ? [-1] : answer;
}