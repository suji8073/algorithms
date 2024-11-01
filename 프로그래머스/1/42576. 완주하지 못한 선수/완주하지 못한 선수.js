function solution(participant, completion) {
    var hashMap = new Map();
    
    for (par of participant) {
        if (!hashMap.has(par)) hashMap.set(par, 1);
        else hashMap.set(par, hashMap.get(par) + 1);
    }
    
    for (com of completion) {
        const count = hashMap.get(com);
        if (count === 1) hashMap.delete(com);
        else hashMap.set(com, count -1);
    }
    
    return [...hashMap.keys()][0];
}