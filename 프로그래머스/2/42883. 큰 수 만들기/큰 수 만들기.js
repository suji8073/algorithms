function solution(number, k) {
    const stack = [];
    let count = 0;
    
    for (const num of [...number]) {
        while (stack.length !== 0 && stack[stack.length - 1] < Number(num) && count < k){
            stack.pop();
            count++;
        }
        stack.push(Number(num));
    }
    
    return stack.slice(0, number.length - k).join('')
}


