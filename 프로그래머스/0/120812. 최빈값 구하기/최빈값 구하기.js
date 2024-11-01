function solution(array) {
    var answer = {};
    for (num of array) {
        if (answer[num]) answer[num]++;
        else answer[num] = 1;
    }
    
    const maxNum = Math.max(...Object.values(answer));
    
    var result = [];
    Object.entries(answer).map(([key, value]) => {
       if (value === maxNum) result.push(key)
     })
    
    
    return result.length > 1 ? -1 : Number(result[0]);
}