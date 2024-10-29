function solution(arr, queries) {
    var result = [];
    
    for ([s,e,k] of queries){
        const array = arr.slice(s, e+1).filter(c => c > k);
        result.push(array.length === 0 ? -1 : Math.min(...array))
    }

    return result;
}