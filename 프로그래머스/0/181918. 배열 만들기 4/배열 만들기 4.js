function solution(arr) {
    var stk = [];
    
    for (let i = 0; i < arr.length; i++) {
        const len = stk.length;
        
        if (len === 0) {
            stk.push(arr[i]);
            continue;
        }
        
        if (stk[len-1] < arr[i]) {
            stk.push(arr[i]);
            continue;
        }
        
        stk.pop();
        i--;
    }
    
    return stk;
}