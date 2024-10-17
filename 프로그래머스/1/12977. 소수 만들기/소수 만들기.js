function solution(nums) {
    const len = nums.length;
    
    const result = [];
    for (var i = 0; i < len - 2; i++) {
        for (var j = i + 1; j < len - 1; j++){
            for (var k = j + 1; k < len; k++) {
                const sum = nums[i] + nums[j] + nums[k];
                result.push(sum);
            }
        }
    }
    
    var answer = 0;
    result.forEach((num) => {
        let check = false;
        for (var i = 2; i <= Math.sqrt(num); i++){
            if (num % i === 0) {
                check = true;
                break;
            }
        }
        
        if (!check) answer ++;
    })
    

    
    return answer;
}