function solution(arr, k) {
    const array = [...new Set(arr)];
    
    if (array.length > k) {
        return array.slice(0, k)
    }
    
    return array.concat(Array.from({length:k - array.length}).fill(-1));
}