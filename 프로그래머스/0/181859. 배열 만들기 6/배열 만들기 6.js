function solution(arr) {
    var stack = [];
    
    for (var i = 0; i < arr.length; i++) {
        if (stack === []) {
            stack.push(arr[i]);
            continue;
        }
        
        if (stack[stack.length -1] === arr[i]) {
            stack.pop();
            continue;
        }
        
        stack.push(arr[i]);
    }

    return stack.length === 0 ? [-1] : stack;
}