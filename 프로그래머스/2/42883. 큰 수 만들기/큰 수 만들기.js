function solution(number, k) {
    const stack = [];
    let removed = 0;
    
    for (const num of number){
        while (stack.at(-1) < num && removed < k && stack.length !== 0){
             stack.pop();
             removed++;
        }
        stack.push(num);
    }
    
    return stack.slice(0, number.length - k).join('');
}


