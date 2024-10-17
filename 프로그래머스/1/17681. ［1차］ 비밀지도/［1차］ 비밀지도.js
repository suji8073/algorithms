function solution(n, arr1, arr2) {
    var answer = [];
    
    for (var i = 0; i < n; i++) {        
        let num1 = arr1[i].toString(2).split('');
        let num2 = arr2[i].toString(2).split('');
        
        num1 = Array(n-num1.length).fill('0').concat(num1);
        num2 = Array(n-num2.length).fill('0').concat(num2);
        
        const array = num1.reduce((acc, cur, i) => acc + (cur === '0' && num2[i] === '0' ? 0 : 1), "")
        answer.push([...array].map((num) => num === '1' ? '#': ' ').join(""));
    }

    return answer;
}