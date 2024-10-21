function solution(dartResult) {
    const bonusTypes = ['S', 'D', 'T'];
    
    let score = 0;
    const result = [];
    
    for (let i = 0; i < dartResult.length; i++) {
        const currentChar = dartResult[i];
        
        if (!isNaN(currentChar)) {
            if (!isNaN(dartResult[i-1])) {
                score = score * 10 + Number(currentChar);
            } else {
                result.push(score);
                score = Number(currentChar);
            }
        } else if (bonusTypes.includes(currentChar)) {
            const bonuxIndex = bonusTypes.indexOf(currentChar);
            score **= (bonuxIndex + 1);
        } else if (currentChar === '*') {
            result[result.length-1] *= 2;
            score *= 2;
        } else if (currentChar === '#'){
            score *= -1;
        }
        
        if (i === dartResult.length -1){
             result.push(score);
        }
    }

    return result.reduce((acc, cur) => acc + cur, 0);
}