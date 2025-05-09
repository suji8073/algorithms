function solution(s) {
    let result = Number.MAX_SAFE_INTEGER;
    let num = 1;
    
    while (num <= s.length){
        const arr = [];
        for (let i = 0; i < s.length; i+=num){
            arr.push(s.slice(i, i+num));
        };
        
        let lastNum = arr[0];
        let count = 1;
        let answer = '';
        
        for (let i = 1; i <= arr.length; i++){
            if (arr[i] === lastNum){
                count++;
                continue;
            }
            
            answer += (count === 1 ? '' : count) + lastNum + '';
            lastNum = arr[i];
            count = 1;
        }
        
        result = Math.min(result, answer.length);
        num++;
    }
    
    return result;
}