function solution(arr) {
    const result = arr.filter((str, i, origin) => {
        if (i === 0) return true;
        return str === origin[i-1] ? false : true;
    });
    
    return result;
}