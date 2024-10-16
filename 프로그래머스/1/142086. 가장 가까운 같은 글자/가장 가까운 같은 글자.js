function solution(s) {
    var answer = [];
    
    [...s].forEach((char, i) => {
        const count = s.slice(0,i).lastIndexOf(char);
        answer.push(count < 0 ? count : i - count);
    })

    return answer;
}

