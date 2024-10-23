function solution(n) {
    var ans = 0;
    
    while (n !== 0) {
        if (Number.isInteger(n / 2)){
            n /= 2;
        } else {
            ans++;
            n -= 1;
        }
    };

    return ans;
}