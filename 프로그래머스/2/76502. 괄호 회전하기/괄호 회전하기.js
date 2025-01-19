function solution(s) {
    const map = new Map([
        ['(', ')'],
        ['[', ']'],
        ['{', '}'],
    ]);
    
    const len = s.length;
    s = s.concat(s);

    var result = 0;
    for (let i = 0; i < len; i++) {
        const str = s.slice(i, i + len);
        var check = [];
        
        for (let j = 0; j < len; j++) {
            if (check.length !== 0 && map.get(check[check.length - 1]) === str[j]) {
                check.pop();
                continue;
            }
            check.push(str[j]);
        }
        if (check.length === 0) result++;
    }

    return result;
}