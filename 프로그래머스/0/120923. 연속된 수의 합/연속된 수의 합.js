function solution(num, total) {
    const first = (2 * total / num - num + 1) / 2;
   
    return Array.from({length: num}, (_, i) => first + i)
}