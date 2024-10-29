function solution(myStr) {
    const array = myStr.split(/a|b|c/).filter(c => c.trim());
    return array.length === 0 ? ['EMPTY'] : array;
}