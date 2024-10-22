function solution(n) {
    const array = Array.from({length: n}, () => Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        array[i][i] = 1;
    }
    
    return array;
}