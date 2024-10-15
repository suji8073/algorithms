function solution(arr, divisor) {
    const array = arr.filter((num) => num % divisor === 0).sort((a, b)=> a - b);
    return array.length === 0 ? [-1] : array;
}