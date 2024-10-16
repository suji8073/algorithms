function solution(arr1, arr2) {
    const result = [];
    for (var i=0; i < arr1.length; i++){
        const array = [];
    
        for (var j=0; j < arr1[i].length; j++){
            array.push(arr1[i][j] + arr2[i][j])
            
        }
        result.push(array);
    }
    return result;
}