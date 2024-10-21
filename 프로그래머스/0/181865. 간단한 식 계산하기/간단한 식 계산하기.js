function solution(binomial) {
    const [a, obs, b] = binomial.split(' ');
    
    if (obs === '+') return +a + +b;
    if (obs === '-') return +a - +b;
    if (obs === '*') return +a * +b;
}