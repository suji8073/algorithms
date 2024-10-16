function solution(sizes) {
//     const findMaxNum = Math.max(...sizes.flat());
//     const findMaxIndex = sizes.findIndex((size) => size[0] === findMaxNum || size[1] === findMaxNum);
    
//     let targetNum = Math.min(...sizes[findMaxIndex]);

//     for (var i=0; i<sizes.length; i++){
//         if (i !== findMaxIndex){
//             const min = Math.min(...sizes[i]);
            
//             if (targetNum < min){
//                 targetNum = min;
//             }
//         }
//     }
    
//     return targetNum * findMaxNum;
    
    var array = sizes[0].sort((a,b) => b - a);
    
    for (var i = 1; i < sizes.length; i++) {
        const size = sizes[i].sort((a, b) => b - a);
        
        if (array[0] < size[0]){
            array[0]= size[0];
        }
        if (array[1] < size[1]){
            array[1]= size[1];
        }
    }
    
    return array[0] * array[1];
    
    
   
}