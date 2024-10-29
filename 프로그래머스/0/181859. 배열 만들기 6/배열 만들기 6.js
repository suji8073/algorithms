function solution(arr) {
    var stack = [];
    
    for (num of arr) {
        const len = stack.length;
        if (len !== 0 && stack[len -1] === num) {
            stack.pop();
            continue;
        }
        
        stack.push(num);
    }

    return stack.length === 0 ? [-1] : stack;
}