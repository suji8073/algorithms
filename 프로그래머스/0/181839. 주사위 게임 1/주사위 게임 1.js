function solution(a, b) {
    if ((a + b) % 2 === 1) {
        return 2 * (a+b);
    }
    
    if ( a * b % 2 === 1){
        return a**2 + b**2;
    }
    return Math.abs(a-b);

}