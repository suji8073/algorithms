function solution(array, commands) {
    const result = [];
    
    for (const [start, end, index] of commands){
        result.push(array.slice(start - 1, end).sort((a, b) => a - b)[index - 1]);
    }
    
    return result;
}