function solution(arr) {
    var num = arr[0];
    var answer = [num];
    
    for (var i = 1; i < arr.length; i++){
        if (num !== arr[i]){
            answer.push(arr[i]);
        } 
        num = arr[i];
    }
    
    return answer

}