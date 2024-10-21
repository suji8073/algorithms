function solution(arr, idx) {
    return arr.findIndex((a, i) => i >= idx && a === 1);
}