function solution(rny_string) {
    return [...rny_string].reduce((acc, cur) => acc + (cur === 'm' ? 'rn' : cur), '');
}