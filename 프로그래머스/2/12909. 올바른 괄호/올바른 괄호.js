function solution(s) {
    const stack = [];
    
    for (const char of s) {
        if (char === ')' && stack[stack.length -1] === '('){
            stack.pop();
            continue;
        } 
        stack.push(char);
    }
    
    return stack.length === 0;
}
