function solution(array) {
    if (array.length === array[0].length) {
        return array;
    }
    
    var result = [...array];
    
    if (array.length > array[0].length){
        for (let i = 0; i < array.length; i++) {
            result[i] = array[i].concat(new Array(array.length - array[0].length).fill(0));
        }
        return result;
    }
    
    for (let i = 0; i < array[0].length - array.length; i++) {
        result.push(new Array(array[0].length).fill(0));
    }
    
    return result;
}