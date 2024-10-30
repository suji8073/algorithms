// function solution(k, tangerine) {
//     var hashMap = new Map();
    
//     tangerine.map(k => {
//         if (!hashMap.has(k)) {
//             hashMap.set(k, 1)
//         } else {
//             hashMap.set(k, hashMap.get(k) + 1);
//         }
//     })
    
//     var array = [];
//     for (const [key, value] of hashMap) {
//         array.push([key, value])
//     }
    
//     array.sort((a, b) => b[1] - a[1]);
    
//     for (let i = 0; i < array.length; i++) {
//         const [num, count] = array[i];
//         if (count >= k) {
//             return i + 1;
//         } else {
//             k -= count;
//         }
//     }
   
//     return tangerine.length;
// }

function solution(k, tangerine) {
    var result = {};
    tangerine.map(k => result[k] ? result[k]++ : result[k] = 1);
    
    const count = Object.values(result).sort((a, b) => b-a);
    
    for (let i = 0; i < count.length; i++) {
        if (count[i] >= k) {
            return i + 1;
        } 
        k -= count[i];
    }
}