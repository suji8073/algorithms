function solution(survey, choices) {
    const score = [3, 2, 1, 0, -1, -2, -3];
    const key = ['R', 'T', 'C', 'F', 'J', 'M', 'A', 'N'];
    const result = [0, 0, 0, 0];
    
    for (let i = 0; i < survey.length; i++ ){
        const [a, b] = survey[i].split('');
        
        const index = Math.floor(key.findIndex(k => k === a) / 2);
        result[index] += score[choices[i]-1] * (a < b ? 1 : -1);
    }
    
    return result.reduce((acc, cur, i) => {
        return acc + (cur >= 0 ? key[i*2] : key[i*2+1])
    }, '')
    
}