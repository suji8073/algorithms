function solution(arr) {
    const min = Math.min(...arr);
    const array = arr.filter((num) => num !== min);
    return array.length === 0 ? [-1] : array;
}