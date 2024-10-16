function solution(left, right) {
    const array = Array.from({length : right - left + 1}, (_, i) => left + i);
    
    var answer = 0;
    for (var i=0; i < array.length; i++){
        var count = 0;
        for (var j=1; j <= Math.sqrt(array[i]); j++){
            if (array[i] % j === 0){
                count ++;
                if (array[i] / j !== j){
                    count ++;
                }
            }
        }
        
        answer += (count % 2 === 0 ? array[i] : -array[i]);
    }
    
    return answer;
}