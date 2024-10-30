// function solution(n) {
//     var answer = 1;
//     for (let i = 1; i <= Math.floor(n/2); i++) {
//         if (2 * i === n) {
//             answer++;
//             break;   
//         }
        
//         var result = 1;
//         for (let j = 0; j < i; j++) {
//             result = result * (n - i - j) / (i - j);
//         }
//         answer = (answer + result);
//     }
//     return answer % 1234567;
// }

function solution(n) {
    var a = 1;
    var b = 2;
    
    if (n === 1) return 1;
    if (n === 2) return 2;
    
    var temp = 0;
    for (let i = 3; i <= n; i++) {
        temp = (a + b) % 1234567;
        a = b;
        b = temp;
    }
    
    return temp;
}