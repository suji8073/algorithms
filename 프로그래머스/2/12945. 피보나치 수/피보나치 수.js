function solution(n) {
    let a = 0, b = 1, temp = 0;
    
    for (let i = 2; i <= n; i++) {
        temp = (a + b) % 1234567;
        if (i !== n) {
            a = b;
            b = temp;
        }
    }
    return temp;
}