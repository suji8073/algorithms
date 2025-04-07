function solution(numbers, target) {
    let result = 0;
    
    dfs(0, numbers[0]);
    dfs(0, -numbers[0]);
    
    return result;
    
    function dfs(index, sum) {
        if (index === numbers.length - 1) {
            if (sum === target) result++;
            return;
        }
        dfs(index + 1, sum - numbers[index + 1]);
        dfs(index + 1, sum + numbers[index + 1])
    }

}
