function solution(numbers, target) {
    let result = 0;
    
    dfs(0, numbers[0]);
    dfs(0, -numbers[0]);
    
    function dfs(idx, sum){
        if (idx === numbers.length - 1){
            if (sum === target) result++;
            return;
        }
        
        dfs(idx + 1, sum + numbers[idx + 1]);
        dfs(idx + 1, sum - numbers[idx + 1]);
    }
    
    return result;
}
