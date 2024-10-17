function checkNum(sum) {
    for (var i = 2; i <= Math.sqrt(sum); i++) {
        if (sum % i === 0) {
            return true;
        }
    }
    return false;
}

function solution(nums) {
    var answer = 0;
    const len = nums.length;
    
    for (var i = 0; i < len - 2; i++) {
        for (var j = i + 1; j < len - 1; j++){
            for (var k = j + 1; k < len; k++) {
                const sum = nums[i] + nums[j] + nums[k];
                if (!checkNum(sum)) answer ++;
            }
        }
    }
    
    return answer;
}