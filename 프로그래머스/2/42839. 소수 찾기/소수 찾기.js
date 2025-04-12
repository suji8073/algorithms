function solution(numbers) {
    let result = 0;
    const numArr = [...numbers];
    
    let combArr = [];
    for (let i = 1; i <= numArr.length; i++){
        combArr.push(...getCombination(numArr, i))
    }
    
    combArr = [...new Set(combArr.map(row => Number(row.join(''))))];
    return combArr.filter((comb) => checkArr(comb)).length;
}

function checkArr(num) {
    if (num === 0 || num === 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false
    }
    return true;
}

function getCombination(arr, selectNum) {
    const result = [];
    if (selectNum === 1) return arr.map((el) => [el]);
    
    arr.forEach((fixed, index, origin) => {
        const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
        const combination = getCombination(rest, selectNum - 1);
        const gg = combination.map((el) => [fixed, ...el]);
        result.push(...gg);
    });
    
    return result;
}
