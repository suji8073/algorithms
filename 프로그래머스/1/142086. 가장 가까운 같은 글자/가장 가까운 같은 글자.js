function solution(s) {
    var answer = [];
    
    [...s].forEach((char, i) => {
        if (!s.slice(0, i).includes(char)){
            answer.push(-1);
        } else {
            const index = [...s.slice(0,i)].reverse().findIndex((c) => c === char);
            answer.push(index + 1);
        }
       
    })

    return answer;
}