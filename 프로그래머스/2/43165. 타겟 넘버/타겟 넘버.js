function solution(numbers, target) {
    const signs = [-1, 1];
    
    const len = numbers.length;
    const visited = Array(len).fill(false);
    
    let result = [numbers[0] * -1, numbers[0] * 1];
    for (let i = 1; i < len; i++) {
        const num = numbers[i];
        let arr = [];
        for (let j = 0; j < result.length; j++){
            arr.push(result[j] + num);
            arr.push(result[j] - num);
        }
        result = arr;
    }
   
    return result.filter((num) => num === target).length;
}