function solution(arr, queries) {
    for ([s, e, k] of queries) {
        arr = arr.map((a, i) => {
            if (i >= s && i <= e && i % k === 0) return a + 1;
            return a;
        })
    }
    return arr;
}