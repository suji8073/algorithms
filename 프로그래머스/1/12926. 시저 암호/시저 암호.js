function solution(s, n) {
    var answer = '';
    
    [...s].forEach((char) => {
        if (char === ' '){
            answer += ' ';
        } else if (char === char.toLowerCase()) {
            // 소문자일 경우
            console.log('a'.charCodeAt(), 'z'.charCodeAt())
            const num = char.charCodeAt() + n;
            answer += String.fromCharCode(num > 'z'.charCodeAt() ? num % 'z'.charCodeAt() + 'a'.charCodeAt() - 1 : num);
        } else {
              console.log('A'.charCodeAt(), 'Z'.charCodeAt())
            const num = char.charCodeAt() + n;
            answer += String.fromCharCode(num > 'Z'.charCodeAt() ? num % 'Z'.charCodeAt() + 'A'.charCodeAt() - 1: num);
        }
    });

    
    return answer;
}