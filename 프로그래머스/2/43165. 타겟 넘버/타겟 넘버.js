function solution(numbers, target) {
    let count = 0;
    solve(0, 0);
    
    function solve(x, sum) {
        if (x === numbers.length){
            if (sum === target) count++;
            return;
        }
        solve(x + 1, sum + numbers[x]);
        solve(x + 1, sum - numbers[x]);
    }
   
    return count;
}
