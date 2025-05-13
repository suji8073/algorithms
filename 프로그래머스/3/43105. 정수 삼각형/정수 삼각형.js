function solution(triangle) {
    const len = triangle.length;
    const dp = Array.from({ length: len }, (_, i) => Array(i+1).fill(0));
    dp[0][0] = triangle[0][0];
    
    for (let i = 1; i < len; i++){
        for (let j = 0; j <= i; j++) {
            if (j > 0) dp[i][j] = Math.max(dp[i][j], dp[i-1][j-1] + triangle[i][j])
            if (j < i) dp[i][j] = Math.max(dp[i][j], dp[i-1][j] + triangle[i][j])
        }
    }


    return Math.max(...dp[len-1]);
}