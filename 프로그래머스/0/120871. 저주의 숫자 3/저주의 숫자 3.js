function solution(n) {
    var answer = 0;
    for (let i = 1; i <= n; i++) {
        answer++;
        while(true){
            if (answer % 3 === 0) answer++;
            else if ([...String(answer)].includes('3')) answer++;
            else break;
        }
    }
    return answer;
}