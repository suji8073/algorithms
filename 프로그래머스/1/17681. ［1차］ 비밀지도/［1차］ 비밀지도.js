function solution(n, arr1, arr2) {
    var array = [];
    
    for (var i = 0; i < n; i++) {        
        const num1 = arr1[i].toString(2).padStart(n, '0');
        const num2 = arr2[i].toString(2).padStart(n, '0');

        array.push([...num1].reduce((acc, cur, i) => acc + (cur === '0' && num2[i] === '0' ? ' ' : '#'), ""));
    }

    return array;
}