function solution(answers) {
    const array = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];
    
    const num = Math.floor(answers.length / 5) + 1;
    const result = [];
    array.forEach((arr, index) => {
        const len = answers.filter((a, i) => a === arr[i % arr.length]).length;
        result.push(len);
    });
    
    const max = Math.max(...result);
    return result.flatMap((r, i) => r === max ? [i+1] : []);
}