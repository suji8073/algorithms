
function solution(topping) {
    const firstArr = new Map();
    const lastArr = new Map();
    
    for (const t of topping){
        if (lastArr.has(t)) lastArr.set(t, lastArr.get(t) + 1)
        else lastArr.set(t, 1);
    }
    
    var answer = 0;
    
    for (const t of topping) {
        lastArr.set(t, lastArr.get(t) - 1);
        if (lastArr.get(t) === 0) lastArr.delete(t);
        
        if (firstArr.has(t)) firstArr.set(t, firstArr.get(t) + 1)
        else firstArr.set(t, 1);
        
        if (firstArr.size === lastArr.size) answer++;
    }
    
    return answer;
}