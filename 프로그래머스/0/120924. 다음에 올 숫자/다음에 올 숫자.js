function solution(common) {
    const len = common.length;
    
    const sum = common.reduce((acc, cur) => acc + cur, 0);
    if (len * (common[0] + common[len-1]) / 2 === sum) {
        const d = (common[len-1] - common[0]) / (len - 1);
        return common[0] + len * d;
    }
    
    return common[0] * (common[1] / common[0])**len;
}