function solution(arr, queries) {
    queries.map(([a, b]) => {
        const start = arr[a];
        arr[a] = arr[b];
        arr[b] = start;
    })
    return arr;
}