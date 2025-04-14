const map = new Map([
    ['(', ')']
])

function solution(p) {
    if (checkStr(p)) return p;
    return getResult(p);
}

function getResult(p) {
    let result = '';
    while (p.length > 0) {
        const count = [0, 0];
        let arr = [];
        for (let i = 0; i < p.length; i++) {
            if (p[i] === '(') count[0]++;
            else count[1]++;

            if (count[0] === count[1]) {
                arr = [p.substr(0, i + 1), p.substr(i + 1)];
                break;
            }
        }
        
        if (!checkStr(arr[0])){
            const v = getResult(arr[1]);
            const u = [...arr[0]];
            u.shift();
            u.pop();
            
            const newStr = '(' + v + ')' + u.map(i => i === '(' ? ')' : '(').join('');
            result += newStr;
            break;
        }
        
        result += arr[0];
        p = arr[1];
    }
    
    return result;
}

function checkStr(str) {
    const stack = [];
    
    for (const char of str) {
        const len = stack.length;
        const last = len === 0 ? null : stack[len - 1];
        
        if (last === '(' && char === ')') {
            stack.pop();
            continue;
        }
        
        stack.push(char);
    }
    
    return stack.length === 0;
}