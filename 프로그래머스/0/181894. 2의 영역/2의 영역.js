function solution(arr) {
    const index = arr.indexOf(2);
    return index === -1 ? [-1] : arr.slice(index, arr.lastIndexOf(2) + 1);
}