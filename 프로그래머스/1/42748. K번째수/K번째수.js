function solution(array, commands) {
    const result = [];
    for (const [start, end, index] of commands){
        const newArr = array.slice(start - 1, end).sort((a, b) => a - b)
        result.push(newArr[index-1]);
    }
    return result;
}