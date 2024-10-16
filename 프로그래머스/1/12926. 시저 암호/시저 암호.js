function solution(s, n) {
    var answer = '';
    
    [...s].forEach((char) => {
        if (char === ' '){
            answer += ' ';
        } else if (char === char.toLowerCase()) {
            const num = char.charCodeAt() + n;
            answer += String.fromCharCode(num > 'z'.charCodeAt() ? num % 'z'.charCodeAt() + 'a'.charCodeAt() - 1 : num);
        } else {
            const num = char.charCodeAt() + n;
            answer += String.fromCharCode(num > 'Z'.charCodeAt() ? num % 'Z'.charCodeAt() + 'A'.charCodeAt() - 1 : num);
        }
    });

    
    return answer;
}