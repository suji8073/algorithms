function solution(sizes) {
    const findMaxNum = Math.max(...sizes.flat());
    const findMaxIndex = sizes.findIndex((size) => size[0] === findMaxNum || size[1] === findMaxNum);
    
    let targetNum = Math.min(...sizes[findMaxIndex]);

    for (var i=0; i<sizes.length; i++){
        if (i !== findMaxIndex){
            const min = Math.min(...sizes[i]);
            
            if (targetNum < min){
                targetNum = min;
            }
        }
    }
    


    return targetNum * findMaxNum;
}