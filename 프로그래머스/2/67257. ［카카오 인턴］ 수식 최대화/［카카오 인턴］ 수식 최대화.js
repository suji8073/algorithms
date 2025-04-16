const map = [
    ['*', '-', '+'],
    ['*', '+', '-'],
    ['+', '-', '*'],
    ['+', '*', '-'],
    ['-', '+', '*'],
    ['-', '*', '+'],
]

function solution(expression) {
    const numArr = expression.match(/\d+/g).map(Number)
    const calcArr = expression.match(/[*+-]/g);
    
    let result = 0;

    for (const row of map) {
        const operation = [...row];
        let targetNum = [...numArr];
        let targetCalc = [...calcArr];
        
        while (operation.length > 0) {
            const op = operation.shift();
            for (let i = 0; i < targetCalc.length; i++){
                if (targetCalc[i] === op) {
                    if (op === '+') targetNum[i + 1] = targetNum[i + 1] + targetNum[i];
                    else if (op === '-') targetNum[i + 1] = targetNum[i] - targetNum[i + 1]
                    else targetNum[i + 1] *= targetNum[i];
                    
                    targetNum[i] = null;
                    targetCalc[i] = null;
                }
            }
            targetNum = targetNum.filter(t => t !== null);
            targetCalc = targetCalc.filter(t => t !== null);
        }
        
        const sum = targetNum.reduce((acc, cur) => acc + cur, 0);
        result = Math.max(result, Math.abs(sum))
    }
    
    return result;
}