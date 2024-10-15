function solution(x) {
    const sum = (x+"").split('').reduce((prev, curr) => prev + parseInt(curr), 0);
    return x % sum === 0;
}