function solution(s) {
    var count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') count++;
        else if (s[i] === ')') count--;
        
        if (count < 0) {
            return false;
            break;
        }
    }
    return count === 0
}