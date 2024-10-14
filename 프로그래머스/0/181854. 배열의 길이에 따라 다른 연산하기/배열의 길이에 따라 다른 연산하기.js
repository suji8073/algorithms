function solution(arr, n) {
    var answer = [];
    
    arr.map((a, i) => {
        answer.push(arr.length % 2 !== i%2 ? a+n : a)
    });

    return answer;
}

