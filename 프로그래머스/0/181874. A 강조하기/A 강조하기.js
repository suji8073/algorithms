function solution(myString) {
    var answer = '';
    [...myString].map((string) => {
        if (string === 'a') answer += 'A';
        else if (string === string.toUpperCase() && string !== 'A') answer += string.toLowerCase();
        else answer += string;
    })
    return answer;
}