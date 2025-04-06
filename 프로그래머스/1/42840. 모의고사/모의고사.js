function solution(answers) {
    const array = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];
    
    const num = Math.floor(answers.length / 5) + 1;
    const resultArr = [];
    array.forEach((arr, index) => {
        const newAnswers = [...answers];
        
        let count = 0;
        while (newAnswers.length > 0){
            const target = newAnswers.splice(0, arr.length);
            const len = target.filter((t, i) => t === arr[i]).length;
            count+= len;
        }
        resultArr.push(count);
    });
    
    const max = Math.max(...resultArr);
    const result = [];
    resultArr.map((r, i) => {
        if (r === max) result.push(i+1);
    })
    return result;
}