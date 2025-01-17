function solution(polynomial) {
    var answer = [0, 0];
    
    polynomial.split(' + ').map((char) => {
        if (!isNaN(char)){
            answer[1] += +char;
        } else {
            const num = +char.slice(0, char.length-1);
            answer[0] += num === 0 ? 1 : num;
        }
    });
    
    if (answer[0] === 0) return String(answer[1]);
    if (answer[1] === 0) return `${answer[0] === 1 ? '' : answer[0]}x`
    
    return `${answer[0] === 1 ? '' : answer[0]}x + ${answer[1]}`
}