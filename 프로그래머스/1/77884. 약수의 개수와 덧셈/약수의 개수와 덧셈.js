function solution(left, right) {
//     var answer = 0;
    
//     for (var i = left; i <= right; i++){
//         var count = 0;
//         for (var j = 1; j <= Math.sqrt(i); j++){
//             if (i % j === 0){
//                 count += (i / j !== j ? 2 : 1)
//             }
//         }
//         answer += (count % 2 === 0 ? i : -i);
//     }
    
//     return answer;
    
    var answer = 0;
    
    for (var i = left; i <= right ; i++){
        answer += (Number.isInteger(Math.sqrt(i)) ? -i : i)
    }
    
    return answer;
}