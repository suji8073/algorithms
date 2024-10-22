function getCount(num) {
     return [...num.toString(2)].filter(c => c === '1').length;
}

function solution(n) {
    const count = getCount(n);
    
    let index = n + 1;
    while(true) {
        if (getCount(index) === count) break;
        index++;
    }
    
    return index;
}