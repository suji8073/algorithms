function solution(A,B){
    A.sort((a, b) => a - b);
    return B.sort((a, b) => b - a).reduce((acc, cur, i) => acc + cur * A[i], 0);
}