function solution(arr, query) {
    for (let i = 0; i < query.length; i++) {
        if (i % 2 === 0) {
            arr = arr.splice(0, query[i] + 1);
        } else {
            arr = arr.splice(query[i]);
        }
    }
 
    return arr;
}