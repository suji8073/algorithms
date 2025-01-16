function solution(score) {
    const totalScore = score.map(([a, b], index) => ({total: a + b, index}));
    
    totalScore.sort((a, b) => b.total - a.total)
    
    const ranks = Array(score.length).fill(0);
    let rank = 1;
    
    for (let i = 0; i < totalScore.length; i++) {
        if (i > 0 && totalScore[i-1].total === totalScore[i].total) {
            ranks[totalScore[i].index] = ranks[totalScore[i-1].index]
        } else {
            ranks[totalScore[i].index] = rank;
        }
       rank++;
    }
    
    return ranks;
    
}