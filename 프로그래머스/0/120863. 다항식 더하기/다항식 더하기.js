function solution(polynomial) {
    var answer = [0, 0];
    
    polynomial.split(' + ').map((char) => {
        if (char.includes('x')){
            answer[0] += char === 'x' ? 1 : parseInt(char.replace('x', ''));
        } else {
            answer[1] += parseInt(char)
        }
    });
    
    if (answer[0] === 0) return String(answer[1]);
    if (answer[1] === 0) return `${answer[0] === 1 ? '' : answer[0]}x`
    return `${answer[0] === 1 ? '' : answer[0]}x + ${answer[1]}`
}