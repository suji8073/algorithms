function solution(strArr) {
    var result = {};
    
    strArr.forEach(str => {
        const len = str.length;
        if (result[len]) {
            result[len]++;
        } else {
            result[len] = 1;
        }
    })
    
    return Math.max(...Object.values(result));
}