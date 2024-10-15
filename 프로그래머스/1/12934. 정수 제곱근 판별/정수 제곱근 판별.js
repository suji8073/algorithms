function solution(n) {
    var answer = 0;
    return Number.isInteger(Math.sqrt(n)) ? (Math.sqrt(n) + 1)**2 : -1;
}