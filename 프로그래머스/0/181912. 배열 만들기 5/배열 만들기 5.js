function solution(intStrs, k, s, l) {
    var answer = [];
    
    intStrs.map((intStr) => {
        const num = Number(intStr.slice(s, s + l));
        if (num > k) {
            answer.push(num)
        }
    })
  
    return answer;
}