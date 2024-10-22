function solution(a, b, c) {
    const len = [...new Set([a,b,c])].length;
    
    if (len === 3) return a + b + c;
    if (len === 2) return (a + b + c) * (a**2 + b**2 + c**2);
    if (len === 1) return (a + b + c) * (a**2 + b**2 + c**2 ) * (a**3 + b**3 + c**3 )
}