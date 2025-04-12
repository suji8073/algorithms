function solution(expression) {
    const numArr = expression.match(/\d+/g).map(Number);
    const calcArr = expression.match(/[+\-*]/g);
    
    const order = getOrder(calcArr);
    
    let result = Number.MIN_SAFE_INTEGER;
    order.forEach(c => {
        const num = getNum([...numArr], [...calcArr], c);
        result = Math.max(num, result)
    });
    
    return result;
}

function getNum(numbers, calcs, rank) {
    while (rank.length > 0) {
        const r = rank.shift();
        const len = calcs.length;

        for (let i = 0; i < len; i++){
            if (calcs[i] !== r) continue;
            
            let num = 0;
            if (r === '*') num = numbers[i] * numbers[i+1];
            else if (r === '-') num = numbers[i] - numbers[i+1];
            else num = numbers[i] + numbers[i+1];
            
            numbers[i] = '';
            numbers[i+1] = num;
            calcs[i] = '';
        }
        numbers = numbers.filter(n => n !== '');
        calcs = calcs.filter(c => c !== '');
    }

    return Math.abs(numbers[0]);
}

function getOrder(arr){
    const newArr = [...new Set(arr)];
    return getCombination(newArr, newArr.length);
}

function getCombination(arr, selectNum){
    const result = [];
    if (selectNum === 1) return arr.map((el) => [el]);
    
    arr.forEach((fixed, index, origin) => {
        const rest = [...origin.slice(0, index), ...origin.slice(index+1)];
        const combination = getCombination(rest, selectNum-1);
        const attached = combination.map((el) => [fixed, ...el]);
        result.push(...attached);
    });
    
    return result;
}
