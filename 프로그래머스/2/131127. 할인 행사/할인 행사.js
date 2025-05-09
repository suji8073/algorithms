// function solution(want, number, discount) {
//     var map = new Map();
//     for (let i = 0; i < want.length; i++){
//         map.set(want[i], number[i])
//     }
    
    
//     var answer = 0;
//     var newMap = new Map();
    
//     for (let j = 0; j < discount.length; j++) {
//         newMap.set(discount[j], newMap.has(discount[j]) ? newMap.get(discount[j]) + 1: 1);
                   
//         if (j < 9) continue;
//         var check = true;
//         for (const [key, value] of map){
//             if (!newMap.has(key) || value > newMap.get(key)){
//                 check = false;
//                 break;
//             }
//         }
        
//         if (check) answer++;
//         newMap.set(discount[j-9], newMap.get(discount[j-9]) - 1);
//     }
    
//     return answer;
// }

function solution(want, number, discount) {
    const len = want.length;
    var result = 0;
    
    for (let i = 0; i <= discount.length - 10; i++){
        const array = discount.slice(i, i + 10);
        const check = want.filter((key, i) => array.filter(a => a === key).length === number[i]).length === len;
        if (check) result++;
    }
    
    return result;
}